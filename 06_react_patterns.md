<div align='center'>
<h1> Design Principles and Patterns </h1>
</div>

# Table of Contents

- [SOLID Principles](#solid-principles)
- [General-Purpose Design Patterns](#general-purpose-design-patterns)
- [React-specific Patterns](#react-specific-patterns)
  - [Flux Pattern](#flux-pattern)
  - [Compound Pattern](#compound-pattern)

# SOLID Principles

The SOLID Principles are a set of five design principles used to write clean, maintainable, and scalable object-oriented code.

1) Single Responsibility:
2) Open/Closed:
3) Liskov Substitution:
4) Interface Segregation:
5) Dependency Inversion:

Use cases: systems that require scalability, testability, and long-term maintenance.

# General-Purpose Design Patterns

Examples of general-purpose design patterns used to provide solutions to common design problems are:

- Singleton: is an object-oriented design pattern that ensures a class has only one instance.

- Observer: is a behavioral design pattern that defines a one-to-many relationship between objects. When one object (the subject) changes its state, all dependent objects (observers) are notified and updated automatically. 

- Factory Method: defines an interface for creating objects but lets subclasses alter the type of created objects.

- Model-View-Controller (MVC): is an object-oriented design pattern used to separate the application into three interconnected components. The Model class contains the core logic, data and state of the application (e.g., game rules). The View class manages the UI and presents data to the user. The Controller class  handles user inputs and translates them into commands that update the Model's state and the View class.

# React-specific Patterns

## Flux Pattern

Is an architectural pattern for state management that uses a unidirectional data flow to handle state changes in an application. Redux is inspired by Flux.
 
Use cases: large-scale React applications where complex state management is needed, such as single-page apps (SPAs) with many interactions and state changes, real-time updates in applications like chat systems, and dashboards with live data updates.

## Compound Pattern

Is a design approach for flexible component composition which involves creating a set of react components that work together to form a single higher-level component. These components are often implemented using React's Context API and Hooks.

Use cases: UI libraries where flexibility in component behavior is needed, such as building forms with complex validation, reusable UI components like dropdowns, modals, and tooltips, or customizable input groups where children components are passed in dynamically.