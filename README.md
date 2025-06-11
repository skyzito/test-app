# Micro-Frontend Demo with React, Vue, and Rspack

## Overview

This project demonstrates a modern micro-frontend architecture using both React and Vue in the same application, powered by [Rspack](https://www.rspack.dev/) for fast builds and HMR. The top navigation bar is built with React, while the main content area (a paginated, responsive user table) is implemented in Vue and seamlessly integrated into React using [veaury](https://github.com/devilwjp/veaury).

### Why Micro-Frontends?
- **Scalability:** Teams can work independently on different parts of the UI, even using different frameworks.
- **Incremental Migration:** Legacy apps can be gradually migrated to new tech (e.g., from Vue to React or vice versa).
- **Best Tool for the Job:** Use the strengths of each framework where they fit best.
- **Resilience:** Isolated codebases reduce the risk of global failures.

### Why React + Vue Together?
- **Real-World Interop:** Many organizations have both React and Vue expertise or legacy code. This project shows a robust, maintainable way to combine them.
- **Showcase:** Demonstrates how to embed a Vue component (with state, events, and reactivity) inside a React app, using veaury for smooth interop.

### Why Rspack?
- **Speed:** Lightning-fast builds and HMR, especially for large projects.
- **Modern:** Supports both React and Vue out of the box, with advanced features like CSS modules and code splitting.
- **Webpack Compatibility:** Easy migration path for existing Webpack projects.

## Security Considerations
- **No direct DOM manipulation:** All UI is rendered via React or Vue, avoiding XSS risks from `dangerouslySetInnerHTML` or `v-html`.
- **No use of `eval`, `Function`, or similar dynamic code execution.**
- **No direct use of cookies, localStorage, or sessionStorage.**
- **No external data fetching or user input handling in this demo.**
- **Event listeners are properly managed:** Only a single `resize` listener is added in the Vue table for responsiveness.
- **No third-party scripts or unsafe dependencies.**

## Why Each Library?

- **react / react-dom:** Core libraries for building the top bar and routing shell.
- **react-router-dom:** Declarative routing for React, enables navigation and page structure.
- **vue:** Used for the main user table, demonstrating micro-frontend interop.
- **veaury:** Bridges React and Vue, allowing Vue components to be used inside React (and vice versa).
- **rspack & @rspack/*:** Modern, fast alternative to Webpack for building and serving the app.
- **@babel/preset-typescript:** Enables Babel to transpile TypeScript, needed for Vue JSX/TSX support.
- **zephyr-webpack-plugin:** (Optional) Example of plugin extensibility; can be removed if not needed.
- **typescript & @types/*:** Type safety and autocompletion for both React and Vue code.
- **react-refresh & @rspack/plugin-react-refresh:** Enables fast refresh for React during development.

## Setup

Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Start the dev server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

## Extending or Contributing
- Add new React components to `src/components/react/`.
- Add new Vue components to `src/components/vue/`.
- Styles live in `src/styles/`.
- To add a new micro-frontend, use veaury to bridge between React and Vue as needed.