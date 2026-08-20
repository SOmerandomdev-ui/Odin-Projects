# Vercel monorepo setup for Odin-Projects
# Requires: vercel login, git push to origin, and VISUAL_CROSSING_API_KEY for weather app

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)

$apps = @(
  @{ Name = "odin-admin-dashboard";    Path = "apps/Admin-Dashboard" },
  @{ Name = "odin-battleship";         Path = "apps/BattleShip" },
  @{ Name = "odin-calculator";         Path = "apps/Calculator" },
  @{ Name = "odin-etch-a-sketch";      Path = "apps/Etch-A-Sketch" },
  @{ Name = "odin-library";            Path = "apps/Library" },
  @{ Name = "odin-rock-paper-scissors"; Path = "apps/Rock-Paper-Scissors" },
  @{ Name = "odin-sign-up-form";       Path = "apps/Sign-up-Form" },
  @{ Name = "odin-tic-tac-toe";        Path = "apps/Tic-Tac-Toe" },
  @{ Name = "odin-weather-app";         Path = "apps/Weather-App" }
)

Write-Host "Checking Vercel authentication..."
vercel whoami

foreach ($app in $apps) {
  $appDir = Join-Path $RepoRoot $app.Path
  Write-Host "`n=== $($app.Name) ($($app.Path)) ===" -ForegroundColor Cyan

  vercel project add $app.Name 2>$null
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Project may already exist, continuing..."
  }

  vercel project update $app.Name --root-directory $app.Path

  Push-Location $appDir
  vercel link --yes --project $app.Name
  vercel deploy --prod --yes
  Pop-Location
}

Write-Host "`nAll deployments complete." -ForegroundColor Green
Write-Host "Remember to set VISUAL_CROSSING_API_KEY on odin-weather-app:"
Write-Host "  vercel env add VISUAL_CROSSING_API_KEY production --project odin-weather-app"
