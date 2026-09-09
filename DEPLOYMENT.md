## How This Is Deployed

The site is a static export hosted on AWS, provisioned entirely with Terraform — no manual console clicking for the actual resources.

**Architecture:**
```
Browser → CloudFront (CDN, HTTPS) → S3 bucket (private)
```

**Why S3 + CloudFront instead of a PaaS (Vercel/Netlify):** those are simpler, but they abstract away the actual cloud infrastructure. Since the goal here was to build real, demonstrable cloud engineering experience — not just ship a site — S3 + CloudFront means provisioning storage, a CDN, access control, and DNS-level concerns directly.

**Why the bucket is private, not public:** the S3 bucket has all public access blocked (`aws_s3_bucket_public_access_block`). Instead, a CloudFront **Origin Access Control (OAC)** is the only thing allowed to read from it — enforced by a bucket policy that checks the request's source ARN matches this specific CloudFront distribution. This is the current AWS-recommended pattern (OAC superseded the older, less secure "Origin Access Identity"): the bucket has zero public exposure, all traffic is forced through CloudFront's HTTPS edge.

**Why Terraform instead of clicking through the console:** the entire infrastructure — the bucket, the CDN distribution, the access control, the bucket policy — is defined in three files (`main.tf`, `variables.tf`, `outputs.tf`). That means it's reproducible (`terraform apply` recreates it identically from scratch), version-controlled (changes to infrastructure show up in `git log` like any other code change), and destroyable cleanly (`terraform destroy` tears down every resource it created, nothing left dangling).

**Deploy flow:**
```bash
npm run build                              # static export to out/
aws s3 sync out/ s3://<bucket-name>         # upload changed files
aws cloudfront create-invalidation \        # bust the CDN cache
  --distribution-id <id> --paths "/*"
```

The `create-invalidation` step matters: CloudFront caches aggressively for performance, so re-uploading to S3 alone isn't enough — without invalidating, visitors would keep seeing the previous version until the cache naturally expired.

**What's intentionally not automated yet:** the deploy flow above is still run manually. The natural next step is wiring this into GitHub Actions so it runs on every push to `master` — currently tracked as an open item, not yet built.
