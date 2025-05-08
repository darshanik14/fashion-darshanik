#!/bin/bash

# Build script for Netlify deployment
echo "Building static site for Netlify deployment..."

# Use Vite to build the client
cd client
npx vite build --outDir ../dist

echo "Build complete! The static site is ready in the 'dist' directory."