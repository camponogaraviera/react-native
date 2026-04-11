<div align='center'>
  <h1> React Native </h1>
  <h2> Best Practices </h2>
</div>

# Table of Contents

- [Project Setup](#project-setup)
- [Code Structure](#code-structure)
- [Components](#components)
- [Styling](#styling)
- [Navigation](#navigation)
- [State Management](#state-management)
- [Performance](#performance)
- [Networking](#networking)
- [Testing](#testing)
- [Security](#security)
- [Release & Ops](#release--ops)

# Project Setup

- Use a single package manager for consistency. Use either `yarn` (recommended) or `npm` to install packages during the development cycle.
- Pin Node.js to an LTS version.
- When using `yarn.lock`, there is no need to keep the `package-lock.json`.
- Do not `git ignore` the `yarn.lock` file and the `.yarn/` folder (from Yarn V2+ a.k.a Berry), as they ensure that the exact versions of dependencies are installed, even if the versions in `package.json` are defined using version ranges (such as `^` or `~`).
- Store environment variables in dedicated files and never commit secrets.

# Code Structure

- Organize by feature when the app grows (feature-first folders).
- Keep UI components separate from data fetching and side effects, focusing purely on rendering UI based on props.
- Implement the component logic in a separate module, usually via custom hooks.
- Use hooks for shared logic between multiple components instead of duplicating code.
- Implement API calls, business logic, and external integrations under the` services/` folder.
- Use absolute imports over relative imports and well-defined aliases to reduce long chains.

# Components

- Prefer composition over inheritance.
- Keep the component styles in a separate module under the same folder.

# Styling

- Set up theming infrastructure for spacing, typography, and colors.
- Avoid inline styles by using styled components.

# Navigation

- Set up a navigation infrastructure.
- Define route params with consistent naming and types.
- Use lazy screens for heavy routes to improve startup time.

# State Management

- Avoid prop drilling by using React Context API for shared, stable data.

# Performance

- Profile before optimizing and focus on actual bottlenecks.
- Use [React Compiler](https://react.dev/learn/react-compiler) for automatic memoization without manually calling `useMemo`, `useCallback`, and `React.memo`.
- Defer loading components until they are rendered for the first time.

# Networking

- Use async and await to avoid callback hell.
- Centralize API calls and handle errors consistently.
- Use timeouts and retry logic for unstable networks.
- Cache data when possible and refresh in the background.
  
# Testing

- Add unit tests for business logic and utilities.
- Use integration tests for critical flows.

# Security

- Never store secrets in the app bundle.
- Use secure storage for tokens and credentials.
- Validate inputs and sanitize data from untrusted sources.

# Release & Ops

- Automate builds and releases with CI pipelines.
- Track crashes and performance regressions.
- Keep release notes and versioning consistent.
