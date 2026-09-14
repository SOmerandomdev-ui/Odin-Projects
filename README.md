# Odin Projects

Monorepo of [The Odin Project](https://www.theodinproject.com/) curriculum apps, grouped so they can be deployed together on Vercel. It is a learning path from static HTML/CSS through JavaScript games and Webpack-bundled apps, not a single product.

## Features

- Nine shipped apps with live demos (layout, forms, browser games, weather lookup)
- Shared `apps/` tree for coordinated deploys
- PowerShell helper to create Vercel projects and set each app’s root directory
- Stub folders for Knights Travails and To-Do List (source lives in their standalone repos)

## Tech stack

- Mixed per app: HTML, CSS, vanilla JavaScript
- Webpack 5 + Jest on BattleShip and Weather App
- Vercel for hosting

## Apps

| App | What it does | How to run | Demo |
| --- | --- | --- | --- |
| Admin-Dashboard | Admin layout with sidebar, header, and project cards | Open `apps/Admin-Dashboard/index.html` | [Live](https://odin-projects-sandy.vercel.app) |
| BattleShip | Place ships and play against a computer opponent | `cd apps/BattleShip && npm install && npm run dev` | [Live](https://odin-projects-five.vercel.app) |
| Calculator | Basic arithmetic keypad | Open `apps/Calculator/index.html` | [Live](https://odin-calculator-beige.vercel.app) |
| Etch-A-Sketch | Hover-paint grid with custom size | Open `apps/Etch-A-Sketch/index.html` | [Live](https://odin-etch-a-sketch-iota.vercel.app) |
| Library | Add, toggle, and delete books | Open `apps/Library/index.html` | [Live](https://odin-library-steel.vercel.app) |
| Rock-Paper-Scissors | Score against a random computer choice | Open `apps/Rock-Paper-Scissors/index.html` | [Live](https://odin-rock-paper-scissors-tau.vercel.app) |
| Sign-up-Form | Two-column sign-up layout with validation styling | Open `apps/Sign-up-Form/index.html` | [Live](https://odin-sign-up-form-nine.vercel.app) |
| Tic-Tac-Toe | Two-player game with factory/module pattern | Open `apps/Tic-Tac-Toe/index.html` | [Live](https://odin-tic-tac-toe-mu.vercel.app) |
| Weather-App | City weather from the Visual Crossing API | `cd apps/Weather-App && npm install && npm run dev` | [Live](https://odin-weather-app-zeta.vercel.app) |
| Knights-Travails | Placeholder in this repo | Use the standalone `Knights-Travails` project | — |
| To-Do-List | Placeholder in this repo | Use the standalone `To-Do-List` project | — |

## Getting started

Clone this repo, then work inside a single app folder:

```bash
cd Odin-Projects/apps/BattleShip
npm install
npm run dev
```

For static apps, open that app’s `index.html` in a browser (or Live Server). Weather App needs a Visual Crossing API key (`VISUAL_CROSSING_API_KEY` on Vercel).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | BattleShip / Weather App Webpack dev server |
| `npm run build` | BattleShip / Weather App production bundle |
| `npm test` | BattleShip Jest tests |
| `scripts/deploy-vercel.ps1` | Link and deploy the nine Vercel apps |

Requires `vercel` CLI login before running the deploy script.
