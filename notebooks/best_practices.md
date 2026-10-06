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

- Use a single package manager for consistency. Use either `yarn` (recommended) or `npm` to install packages during development.

- Pin Node.js to an LTS version.

- Do not `git ignore` the `yarn.lock` file, as it ensures that the exact versions of dependencies are installed, even if the versions in `package.json` are defined using version ranges (such as `^` or `~`).

- Store environment variables in dedicated files and never commit secrets.

---

# Code Structure

1. `Code Organization`: Use feature-first folders as the top-level code organization to organize the application by feature rather than by technical layer. This avoids grouping all components, hooks, and services into separate folders. Cross-feature code lives in a shared folder.

2. `Module Resolution`: Use absolute imports with well-defined aliases instead of long relative chains (`../../`).

3. `Reusable Logic`: Use custom hooks for shared logic between multiple components instead of duplicating code. 

4. `Presentation-Layer Separation`: Developers typically describe their architecture in terms of component composition, unidirectional data flow, and state management. The React community does not prescribe MVVM. However, at scale, a common [MVVM-based](https://github.com/camponogaraviera/full-stack-ai-sw-roadmap/blob/main/full_stack/architectural_patterns/mvvm.md#mapping-mvvm-to-react-with-hooks) style mapping is to use custom hooks to encapsulate the `ViewModel's` presentation logic, while client-side global state management, data fetching operations, and domain logic constitute the `Model`. Apply MVVM when the complexity justifies.

---

# Components

- Prefer composition over inheritance.

- Keep the component styles in a separate module under the same folder.

---

# Styling

- Set up theming infrastructure for spacing, typography, and colors.

- Prefer styled components over inline styles.

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

- Profile before optimizing and focus on actual bottlenecks.

- Use [React Compiler](https://react.dev/learn/react-compiler) for automatic memoization without manually calling `useMemo`, `useCallback`, and `React.memo`.

- Load code lazily: Use `React.lazy` with Suspense for heavy components, and enable Metro's inlineRequires so modules are only evaluated when first used, which reduces startup time.

---

# Networking

- Use [async and await syntactic sugar](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/asynchronous/async-await.js) to avoid the [callback hell](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/asynchronous/callback-hell.js) from nested callbacks.

- Centralize API calls and handle errors consistently.

- Use timeouts and retry logic for unstable networks.

- Cache data when possible and refresh in the background.

---

# Testing

- Add [unit tests](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/testing/test-pyramid.md) for business logic, domain rules, and utilities.

- Add [integration tests](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/testing/test-pyramid.md) for critical integrations and application flows.

- Use property-based testing for unit and integration tests where appropriate. Prefer example-based testing when tests involve heavy I/O (e.g., hitting a real database).
  
---

# Security

- Never store secrets in the app bundle. Environment files are for configuration, not secrets. Anything in the app bundle can be extracted.

- Use secure storage for tokens and credentials.

- Validate inputs and sanitize data from untrusted sources.

---

# Release & Ops

- Automate builds and releases with CI pipelines.

- Track crashes and performance regressions.

- Keep release notes and versioning consistent.
