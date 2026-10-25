# Runs Terraform inside WSL Ubuntu against .\infra.
# Norton 360 intercepts Terraform's local plugin connection on Windows, so Terraform runs in WSL instead.
# Usage: .\tf.ps1 plan    .\tf.ps1 apply    .\tf.ps1 output -raw bucket_name

# Share the Windows AWS CLI config and SSO login with WSL (one-time symlink).
$awsDir = (wsl -d Ubuntu wslpath -a ("$env:USERPROFILE\.aws" -replace '\\','/')).Trim()
wsl -d Ubuntu -- bash -c "test -L ~/.aws || test -e ~/.aws || ln -s '$awsDir' ~/.aws" | Out-Null

$infraDir = (wsl -d Ubuntu wslpath -a ("$PSScriptRoot\infra" -replace '\\','/')).Trim()
wsl -d Ubuntu --cd $infraDir -- ~/.local/bin/terraform @args
exit $LASTEXITCODE
