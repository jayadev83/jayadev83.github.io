# Personal site

Static portfolio site (Astro) hosted on AWS: private S3 bucket, CloudFront with HTTPS, Route 53, all defined in Terraform. GitHub Actions deploys on every push to `main` using OIDC, so no AWS keys are stored.

```
site/      Astro site. Edit content in site/src/data/profile.ts and projects.ts
infra/     Terraform for S3, CloudFront, ACM, Route 53, budget alert, GitHub deploy role
.github/   Deploy workflow
deploy.ps1 Manual build + deploy from this computer
```

## Run locally

```
cd site
npm install
npm run dev
```

Open http://localhost:4321.

## First-time AWS setup

1. Create the AWS account, enable MFA on the root user, and create an admin user in IAM Identity Center.
2. Sign in from this computer: `aws configure sso` (profile name `site`), then `aws sso login --profile site`.
3. Register the domain (Route 53 or Cloudflare).
4. `cd infra`, copy `terraform.tfvars.example` to `terraform.tfvars` and fill it in.
5. From the project folder: `.\tf.ps1 init`, `.\tf.ps1 plan`, then `.\tf.ps1 apply`.
   Terraform runs inside WSL Ubuntu because Norton 360 blocks its plugin connection on Windows.
6. Confirm the AWS Budgets subscription email.
7. Run `.\deploy.ps1` to upload the site.

## Automatic deploys (optional)

1. Create a GitHub repo and push this folder.
2. Set `github_repo = "owner/name"` in `terraform.tfvars` and run `terraform apply`.
3. In the repo's Settings → Secrets and variables → Actions → Variables, add:
   - `AWS_DEPLOY_ROLE_ARN` = `terraform output -raw github_deploy_role_arn`
   - `SITE_BUCKET` = `terraform output -raw bucket_name`
   - `CLOUDFRONT_DISTRIBUTION_ID` = `terraform output -raw cloudfront_distribution_id`

## Cost

About $20 a year: domain (~$10–15) and Route 53 zone ($6). S3 and CloudFront traffic fits in the always-free tier. A budget alert emails you above $5 a month.
