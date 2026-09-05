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
- Do not `git ignore` the `yarn.lock` file and the `.yarn/` folder, as they ensure that the exact versions of dependencies are installed, even if the versions in `package.json` are defined using version ranges (such as `^` or `~`).
- Store environment variables in dedicated files and never commit secrets.

---

# Code Structure

1. `Code organization`: Use feature-first folders to organize the application by feature rather than by technical layer alone. Thus avoiding having all components in a single folder, all hooks in another, all services in a third, etc.

2. `Dependency boundaries`: Use Ports and Adapters (a.k.a Hexagonal Architecture) to isolate domain and application logic from infrastructure concerns such as APIs, databases, storage, and third-party services.
  - Keep API calls and external integrations behind infrastructure adapters, while exposing their capabilities to the application through well-defined ports.
  - Keep domain and business logic in appropriate domain and application/use-case layers and avoid coupling it directly to infrastructure implementations.
  
3. `Presentation architecture`: Use MVVM as the UI architectural pattern at scale when the complexity justifies it.

4. `UI design`: Separate UI components from data fetching/side effects, focusing on rendering UI based on props.

5. `Reusable UI/application behavior`: Use custom hooks for shared logic between multiple components instead of duplicating code. 

6. `Module resolution`: Use absolute imports over relative imports and well-defined aliases to reduce long chains.

Note: Feature-first determines the top-level code organization, while Hexagonal Architecture determines dependency boundaries between the domain/application core and infrastructure. These boundaries can be applied within individual features or across the application where appropriate.

---

# Components

- Prefer composition over inheritance.
- Keep the component styles in a separate module under the same folder.

---

# Styling

- Set up theming infrastructure for spacing, typography, and colors.
- Avoid inline styles by using styled components.

---

# Navigation

- Set up a navigation infrastructure.
- Define route params with consistent naming and types.
- Use lazy screens for heavy routes to improve startup time.

---

# State Management

- Use React Context API for sharing values across the component tree, such as theme, localization, and translation, avoiding prop drilling.

- Use [Redux](https://redux.js.org/) or [MobX](https://mobx.js.org/README.html) for complex, shared application state that requires centralized state management and coordinated updates. Use cases include authentication/session state, shopping cart, and application preferences.

---

# Performance

- Profile before early optimization and focus on actual bottlenecks.
- Use [React Compiler](https://react.dev/learn/react-compiler) for automatic memoization without manually calling `useMemo`, `useCallback`, and `React.memo`.
- Defer loading components until they are rendered for the first time.

---

# Networking

- Use async and await syntactic sugar to avoid the callback hell from Promises.
- Centralize API calls and handle errors consistently.
- Use timeouts and retry logic for unstable networks.
- Cache data when possible and refresh in the background.

---

# Testing

- Add unit tests for business logic and utilities.
- Use integration tests for critical flows.

---

# Security

- Never store secrets in the app bundle.
- Use secure storage for tokens and credentials.
- Validate inputs and sanitize data from untrusted sources.

---

# Release & Ops

- Automate builds and releases with CI pipelines.
- Track crashes and performance regressions.
- Keep release notes and versioning consistent.
