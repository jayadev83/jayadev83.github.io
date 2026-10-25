output "site_url" {
  value = "https://${var.domain_name}"
}

output "bucket_name" {
  value = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "github_deploy_role_arn" {
  value = local.enable_github ? aws_iam_role.github_deploy[0].arn : ""
}

output "name_servers" {
  description = "Only needed if the domain is registered outside Route 53: set these at your registrar."
  value       = var.create_hosted_zone ? aws_route53_zone.site[0].name_servers : []
}
