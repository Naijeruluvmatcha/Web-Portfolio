output "cloudfront_domain_name" {
  description = "The live URL for your site (put https:// in front of this)"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.site.bucket
}
