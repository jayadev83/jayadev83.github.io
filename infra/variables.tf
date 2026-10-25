variable "domain_name" {
  description = "Apex domain for the site, e.g. jayadevsk.com. Register it first."
  type        = string
}

variable "create_hosted_zone" {
  description = "false if the domain was registered in Route 53 (AWS creates the zone for you); true if it was registered elsewhere, e.g. Cloudflare."
  type        = bool
  default     = false
}

variable "region" {
  description = "Region for the S3 bucket and other regional resources."
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS CLI profile created by `aws configure sso`."
  type        = string
  default     = "site"
}

variable "budget_email" {
  description = "Email that receives budget alerts."
  type        = string
}

variable "monthly_budget_usd" {
  description = "Monthly spend that triggers an alert."
  type        = number
  default     = 5
}

variable "github_repo" {
  description = "GitHub repo allowed to deploy, as owner/name. Leave empty to skip the GitHub Actions role."
  type        = string
  default     = ""
}

variable "github_branch" {
  description = "Branch allowed to deploy."
  type        = string
  default     = "main"
}

variable "create_github_oidc_provider" {
  description = "Set false if this AWS account already has the GitHub OIDC provider."
  type        = bool
  default     = true
}
