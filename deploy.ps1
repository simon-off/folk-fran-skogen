Write-Host "Building site..."
pnpm run build

cp -r dist public_html

Write-Host "Copying files to server..."
scp -r public_html folkfranskogen:~/

rm -r public_html
