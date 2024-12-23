#!/bin/bash

# Check if a directory is provided
if [ $# -eq 0 ]; then
    echo "Please provide a directory path"
    exit 1
fi

# Change to the specified directory
cd "$1" || exit

# Check if it's a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "The specified directory is not a git repository"
    exit 1
fi

# Get the current date
current_date=$(date +"%Y-%m-%d")

# Add all files
git add -A

# Commit with a daily message
git commit -m "Daily update: $current_date"

# Push to the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
git push origin "$current_branch"

echo "All changes have been added, committed, and pushed to $current_branch"
