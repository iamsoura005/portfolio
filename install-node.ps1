# Download Node.js installer
$nodeUrl = "https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi"
$nodeInstaller = "$env:TEMP\node-installer.msi"
Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller

# Install Node.js
Start-Process -FilePath "msiexec.exe" -ArgumentList "/i", $nodeInstaller, "/quiet", "/norestart" -Wait

# Clean up
Remove-Item $nodeInstaller

Write-Host "Node.js installation completed. Please restart your terminal." 