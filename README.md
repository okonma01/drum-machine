# Drum Machine

A React-based drum machine with African and hip-hop-inspired kits. Built using [Nano React App](https://github.com/nano-react-app) (Vite under the hood) and deployed on GitHub Pages.

**Live Demo**: [Drum Machine on GitHub Pages](https://okonma01.github.io/drum-machine/)

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

---

## Overview
I built this to learn React fundamentals. It includes two drum kits:
- **Afrobeats**
- **Hip hop**

Users can switch between kits, control power, and adjust volume. Keyboard shortcuts (Q, W, E, A, S, D, Z, X, C) trigger drum sounds.

---

## Features
- **Power Toggle**: Turn the machine on/off.
- **Kit Switch**: Toggle between Hip hop and Afro kits.
- **Volume Control**: Adjust playback volume via a slider.
- **Responsive Layout**: Adapts to mobile, tablet, and desktop screens.
- **Keyboard Support**: Press Q, W, E, A, S, D, Z, X, C on your keyboard to trigger sounds.

---

## Installation
1. **Clone** the repository:
   ```bash
   git clone https://github.com/okonma01/drum-machine.git

2. Install dependencies:
   ```bash
   cd drum-machine
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   This runs the app in development mode at http://localhost:3000 (or whichever port Nano React App picks).

---

## Usage
- Open the app in your browser.
- Click the **Power** button to turn the machine on.
- Click or press Q, W, E, A, S, D, Z, X, C to trigger sounds.
- Adjust the **Volume** slider to control playback volume.
- Click the **Kit** button to switch between kits.

---

## Deployment
This project is deployed via GitHub Pages:

1. Set "homepage": "https://`<your-username>`.github.io/drum-machine" in package.json.

2. Add scripts to package.json:
```json
{
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Run `npm run deploy` to deploy the app to GitHub Pages.

---

## License
This project is open source and available under the MIT License. Feel free to use or adapt this code for your own purposes.