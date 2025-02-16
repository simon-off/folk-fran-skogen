#!/bin/bash

HOST="folkfranskogen"

echo "Building site..."
pnpm run build

# Exit if build fails
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting deployment process."
    exit 1
fi

# Execute dry-run to show what will be transferred
echo "Executing dry-run..."
rsync -avh --delete --dry-run --exclude '.*' dist/ $HOST:~/public_html

# Ask for confirmation before proceeding with the deployment
read -p "Do you want to proceed with the deployment? (yes/no) [yes]: " confirmation

confirmation=${confirmation:-yes}

if [[ "$confirmation" =~ ^[Yy](es)?$ ]]; then
    echo "Deploying to server..."
    rsync -ah --delete --info=progress2 --exclude '.*' dist/ $HOST:~/public_html
    echo "Deployment complete."
else
    echo "Deployment cancelled."
fi
