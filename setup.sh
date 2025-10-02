#!/bin/bash

# Initialize Git repository and push to GitHub
# This script helps set up the repository for GitHub Pages deployment

echo "🚀 Setting up Remy Privacy Policy for GitHub Pages..."

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Sleek privacy policy with typewriter effect"

# Set up GitHub remote (you'll need to create the repository on GitHub first)
echo "🔗 Setting up GitHub remote..."
echo "Please create a new repository named 'RemyWebPolicy' on GitHub first!"
echo "Then run: git remote add origin https://github.com/keshavkrishnan/RemyWebPolicy.git"
echo "And: git push -u origin main"

# Enable GitHub Pages
echo "🌐 To enable GitHub Pages:"
echo "1. Go to your repository settings on GitHub"
echo "2. Scroll down to 'Pages' section"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click 'Save'"
echo ""
echo "Your site will be available at: https://keshavkrishnan.github.io/RemyWebPolicy/"

echo "✅ Setup complete! Your privacy policy is ready to deploy."
