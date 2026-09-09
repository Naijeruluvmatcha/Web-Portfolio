variable "bucket_name" {
  description = "Globally unique S3 bucket name for the portfolio site (e.g. nigelkok-portfolio)"
  type        = string
}

variable "alert_email" {
  description = "Where monitoring alerts get sent"
  type        = string
}
