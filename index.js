#!/usr/bin/env node

const { execSync } = require('child_process');
const open = require('open');
const path = require('path');

function setupReact() {
    try {
        console.log('Creating React project with Vite...');
        execSync('npm create vite@latest react-app -- --template react', { stdio: 'inherit' });

        process.chdir('react-app');

        console.log('Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });

        console.log('Starting the development server...');
        execSync('npm run dev', { stdio: 'inherit' });

        console.log('Opening the project in the browser...');
        open('http://localhost:5173');
    } catch (error) {
        console.error('Failed to set up React project:', error);
    }
}

setupReact();
