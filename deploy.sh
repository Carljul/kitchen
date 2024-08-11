#!/bin/sh
set -e

echo "Deploying application ..."

# Enter maintenance mode
(php artisan down --message 'The app is being updated. Please try again in a minute.') || true

# Update codebase
git fetch origin master
git reset --hard origin/master

# Install dependencies
composer install --no-interaction --prefer-dist --optimize-autoloader
npm install
npm run prod

# Migrate database
php artisan migrate --force

# Clear cache
php artisan optimize

# Exit maintenance mode
php artisan up

echo "Application deployed!"
