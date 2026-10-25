# Builds the site and uploads it to AWS from this computer.
# Uses the outputs of `terraform apply` in .\infra, and the AWS CLI profile from terraform.tfvars ("site" by default).
param([string]$AwsProfile = 'site')

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot

$bucket = & "$root\tf.ps1" output -raw bucket_name
$distId = & "$root\tf.ps1" output -raw cloudfront_distribution_id

Push-Location "$root\site"
npm run build
aws s3 sync dist "s3://$bucket" --delete --profile $AwsProfile
aws cloudfront create-invalidation --distribution-id $distId --paths "/*" --profile $AwsProfile | Out-Null
Pop-Location

Write-Host "Deployed to s3://$bucket and refreshed CloudFront ($distId)."
