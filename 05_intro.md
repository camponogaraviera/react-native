<div align='center'>
<h1> Intro to React Native </h1>
</div>

# Table of Contents

- [Components](#components)
  - [Built-in (native) components](#built-in-native-components)
  - [Custom Components](#custom-components)
  - [Components in JSX](#components-in-jsx)
- [Hooks](#hooks)
  - [Examples of react-native Hooks](#examples-of-react-native-hooks)
    - useState.
    - useReducer.
    - useEffect.
    - useRef.
    - useContext.
    - useColorScheme.
    - useWindowDimensions.
  - [Example of `useState`](#example-of-usestate)
  - [Example of `useEffect` without a Dependency Array](#example-of-useeffect-without-a-dependency-array)
  - [Example of `useEffect` with an Empty Dependency Array](#example-of-useeffect-with-an-empty-dependency-array)
  - [Example of `useEffect` with Specific Dependencies](#example-of-useeffect-with-specific-dependencies)
  - [Example of `useRef` using useEffect without a Dependency Array](#example-of-useref-using-useeffect-without-a-dependency-array)
  - [Optimization Hooks](#optimization-hooks)
- [Context API](#context-api)
  - [Main Components](#main-components)
  - [Use Cases](#use-cases)
  - [Implementation](#implementation)
    - [Example of a User Context](#example-of-a-user-context)
    - [Example of a Theme Context](#example-of-a-theme-context)
- [Utilities](#utilities)
- [Libraries](#libraries)

# Components

In React-native, components are self-contained units of code. They follow the Pascal case convention where the first letter is uppercase (`MyComponent`, `CustomComponent`) and are defined as either functional components or class components. 

- Functional components: with the introduction of React hooks, functional components can also utilize lifecycle-related functionality.

- Class components: they have access to life cycle methods such as componentDidMount, componentDidUpdate, etc. 

Lifecycle methods in React (including React Native) are special methods that are automatically invoked during the lifecycle of a component. These methods allow developers to hook into various stages of a component's existence, such as when it is first created/mounted, updated, rendered, or removed/unmounted from the DOM.

## Built-in (native) components

A component changes whenever its state changes or the props changes.

Examples are:

- [View:](https://reactnative.dev/docs/view) "A container that supports layout with flexbox, style, some touch handling, and accessibility controls."
- [Text:](https://reactnative.dev/docs/text) "Supports nesting, styling, and touch handling."
- [Button:](https://reactnative.dev/docs/button) basic button component that allows users to trigger actions when pressed.
- [Image:](https://reactnative.dev/docs/image) "A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll."
- [SafeAreaView:](https://reactnative.dev/docs/safeareaview) "To render content within the safe area boundaries of a device." **IOS only**.
- [ScrollView:](https://reactnative.dev/docs/using-a-scrollview) "A generic scrolling container that can contain multiple components and views."
- [FlatList:](https://reactnative.dev/docs/flatlist) "A performant interface for rendering basic, flat lists, supporting the most handy features..."
- [SectionList:](https://reactnative.dev/docs/sectionlist) "A performant interface for rendering sectioned lists, supporting the most handy features..."

```javascript
import { Text, View, Button, Image, ScrollView, FlatList, SectionList, SafeAreaView } from "react-native";
```

## Custom Components 

One can create a custom component by defining JavaScript functions or classes. Recall that Classes and Constructor Functions follow the Pascal case convention (MyClass, ConstructorFunction). 

Custom component example:

```javascript
// Exporting a custom component using the arrow function syntax:
export const CustomComponent = () => {
  return "Hello from component.js!";
};
```
If this component was defined in the `component.js` file, it can be imported as follows in the `App.js` file located in the same directory:

```javascript
import { Text, View } from "react-native";
import { CustomComponent } from "./component.js";

export default function ParentComponent() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{CustomComponent()}</Text>
    </View>
  );
}
```
To test it out, run:
```bash
npx expo start
```

## Components in JSX

React-native supports JSX (JavaScript XML), a syntax extension for JavaScript that allows one to write declarative UI components using a syntax that closely resembles HTML or XML.

JSX (JavaScript XML) syntax in react-native works as follows:

```javascript
<MyComponent prop1 = {value1} prop2 = {value2} />
```

Where:

- `MyComponent` is the name of the **child component** to be rendered.
- `prop1` and `prop2` are props, short for "properties". Props are used to pass data from the parent component to the child component. 
- `value1` and `value2` are user-defined property values.

The **parent component** is whatever component includes `<MyComponent />`. For example:

```javascript
import { Text, View } from "react-native";

// Defining the custom Child component:
const ChildComponent = (props) => {
  return "Hello from " + props.prop1 + " I got this data from " + props.prop2;
};

// Exporting the custom Parent component:
export default function ParentComponent() {
  const dataToPass = "Hello from Parent!";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{dataToPass}</Text>
      <Text>
        <ChildComponent prop1="Child!" prop2="Parent!" />
      </Text>
    </View>
  );
}

console.log("Hello from App.js");
```

# Hooks
 
["Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."](https://legacy.reactjs.org/docs/hooks-custom.html#:~:text=Hooks%20are%20a%20new%20addition,component%20logic%20into%20reusable%20functions.&text=Instead%2C%20we'd%20like%20to,logic%20between%20FriendStatus%20and%20FriendListItem%20.) React hooks enable functional components to use state and lifecycle methods that were previously only available in class components. For instance, `useEffect()` is a React Hook that can be used to replicate the lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. `Hooks cannot be used inside classes; they can only be used at the top level of a component`, i.e., inside the component, not outside of it and not inside loops or conditions.

- [State](https://reactnative.dev/docs/state) is a React feature used to store dynamic data, manage/control the behavior of a component, and render dynamic information. Each instance of a component has its own independent state. It is used to track user interactions and other dynamic changes within the component.

## Examples of react-native Hooks

- [useState](https://react.dev/reference/react/useState):
  - **Purpose:** "Is a React Hook that lets you add a [state variable](https://react.dev/learn/state-a-components-memory) to your component." 
  - **Behavior:** it returns two values: the current state value and the setter (a function that allows to update the state value). When the `state` variable is updated using the setter function provided by `useState`, it `triggers a re-render` of the component.
  - **Use cases:** used to manage states in functional components.

- [useReducer](https://react.dev/reference/react/useReducer): 
  - **Purpose:** is a React Hook that can be used as an alternative to `useState` for managing applications with complex state logic (when the state has nested properties or depends on previous state), and when components have many state updates across many event handlers. It can [consolidate all the state update logic outside your component in a single function, called a reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer).
  - **Behavior:** returns an array with exactly two values: the current state value and a dispatch function that dispatches an action to the reducer function, which then determines how to update the state (this triggers a re-render).
  - **Use cases:** used to manage states with multiple updates and to separate state management logic from component logic.
  
- [useEffect](https://legacy.reactjs.org/docs/hooks-effect.html):
  - **Purpose:** is a React Hook that "Lets you perform side effects in function components". 
  - **Behavior:** always run when the component mounts (initial render). However, its behavior on subsequent renders depends on its dependencies.
    - With no dependency array (`useEffect(() => { /* effect */ })`): it will run on every render.
    - With an empty dependency array (`useEffect(() => { /* effect */ }, [])`): it will only run once when the component mounts.
    - With specific dependencies  (`useEffect(() => { /* effect */ }, [dependency1, dependency2])`): it will run after the first render when the component mounts and subsequently whenever the variable in its dependency array changes. 
  - **Use cases:** triggering a search when the input search keyword changes, data fetching, and setting up a subscription.
    
- [useRef](https://react.dev/reference/react/useRef): 
  - **Purpose:** "Is a React Hook that lets you reference a value that’s not needed for rendering." It is used to persist values across renders without causing re-renders.
  - **Behavior:** updating a `useRef` value `does not trigger a re-render` of the component.
  - **Use cases:** it is commonly used to reference DOM elements or store mutable values.  
  
- [useContext](https://react.dev/reference/react/useContext):
  - **Purpose:** "Lets you read and subscribe to context from your component". It is used to pass data between multiple components without passing props manually through each of them, thus avoiding "prop drilling" by allowing components to access a context value directly.
  - **Use cases:** search bar context, favorites context, user authentication, language preferences, dark/light switch mode.
  
- [useColorScheme](https://reactnative.dev/docs/usecolorscheme): "Provides and subscribes to color scheme updates from the Appearance module."
  
- [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions): "Automatically updates all of its values when screen size or font scale changes."

## Example of `useState`

```javascript
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  // Array destructuring:
  const [count, setCount] = useState(0);

  const updateCount = (increment) => {
    setCount(count + (increment ? 1 : -1));
  };

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => updateCount(true)} />
        <Button title="Decrement" onPress={() => updateCount(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
```

## Example of `useEffect` without a Dependency Array

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NoDependencyEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('This effect runs on every render.');
    setCount((prevCount) => prevCount + 1) // useState triggers a re-render.
  }); // With no dependency array, since useState is used, there will be an infinite loop.

  return (
    <View style = {styles.container}>
      <Text>Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
```

## Example of `useEffect` with an Empty Dependency Array

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EmptyDependencyEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('This effect runs only once, when the component first mounts.');
  }, []);

  return (
    <View style = {styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount((prevCount) => prevCount + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
```

## Example of `useEffect` with Specific Dependencies

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SpecificDependenciesEffect() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('This effect runs when the component first mounts and whenever `count` changes.');
    setNumber((prevNumber) => prevNumber + 1); // useState triggers a re-render.
  }, [count]);

  return (
    <View style = {styles.container}>
      <Text>Number: {number}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount((prevCount) => prevCount + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
```

## Example of `useRef` using useEffect without a Dependency Array

```javascript
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RefWithEffect() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    console.log('This effect runs on every render.');
    countRef.current = Math.random(); // useRef does not trigger a re-render. For countRef to be updated, a render must be triggered from the outside.
  }); // With no dependency array, since useRef is used, there will not be an infinite loop.

  return (
    <View style = {styles.container}>
      <Text>countRef: {countRef.current}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount((prevCount) => prevCount + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
```

## Optimization Hooks

Optimization Hooks must be used with caution. Optimizing too early in the development process (premature optimization) can increase the usage of computing resources, as optimization can consume additional memory and rendering time. Therefore, there are trade-offs. The general best practice is to write readable, maintainable, and functional code first. Optimization should be done based on actual performance bottlenecks identified after profiling and testing.

1) [useMemo](https://react.dev/reference/react/useMemo): memoizes (cache) the output value of the provided function, and only updates if one of the dependencies listed in the dependency array changes.

2) [useCallback](https://react.dev/reference/react/useCallback): memoizes (cache) the provided function instead of the function's output. The memoized function will only update if one of the dependencies listed in the dependency array changes.

3) [React Lazy](https://react.dev/reference/react/lazy) and [Suspense](https://react.dev/reference/react/Suspense): are used to load components only when they are needed.

# Context API

React context API is a built-in feature in React that provides a way to share state/data across components without explicitly passing down props through each level of the component tree (a component that uses another component... that uses that state) avoiding prop drilling.

## Main Components 

1. `createContext`:
   - This is not a hook, but a function used to create a Context object that provides states that can be accessed by child components. 

2. `useContext`:
   - This is a hook that allows one to subscribe to a Context object.
   - It is used to access and update the shared state value of a specific Context object within a child component.

It is worth noting that for larger applications or more complex state management, one might consider using dedicated state management libraries such as `Redux or MobX`, which are built to provide more structure and additional features.

## Use Cases

- Theming (e.g., light/dark mode).
- User authentication state.
- Language preferences.
- Any data that needs to be accessible by many components at different nesting levels.

## Implementation

1) Create a context using `createContext()`. It is a good practice to pass default initial values in the argument as this will ensure child components to receive a fallback when trying to consume the context outside its provider (when the child component is not being wrapped in a UserProvider).

2) Wrap the parent component with a Provider component.

3) Child components can then access the context using the `useContext` hook.

### Example of a User Context 

```javascript
// user.context.jsx module.

import React, { createContext, useContext, useState } from 'react';

// Create a Context object:
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

// Create a Provider:
function UserProvider({ children }) {

  // Create a state:
  const [currentUser, setCurrentUser] = useState(null);

  // Return the previous state so that child components can use:
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Create a Child component to consume the state:
function LoginButton() {

  // Access/get the state from the Context object:
  const { user, setUser } = useContext(UserContext);

  // Use the state:
  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <button onClick={() => setUser({ name: 'John' })}>Log in</button>
      )}
    </div>
  );
}

// App.js:

// Here, `UserProvider` is the context provider that wraps the `App` component (the parent) and the LoginButton child component. This enables the LoginButton component to access the `user` and `setUser` context values via the `useContext` hook, without having to pass these values as props.

function App() {
  return (
    <UserProvider>
      <div>
        <h1>My App</h1>
        <LoginButton />
      </div>
    </UserProvider>
  );
}

export default App;
```

### Example of a Theme Context

```javascript
// React Hooks:
import React, { createContext } from "react";

// Import the `useLocalStorage` hook to store the dark mode state persistently, i.e., to retain the user's preference even after a page refresh:
import useLocalStorage from "use-local-storage";

// Create a context with default values to allow components to subscribe to theme changes:
export const ThemeSwitchContext = createContext({
  darkMode: false, // Fallback value for darkMode.
  toggleDarkMode: () => {}, // Fallback function for toggleDarkMode.
});

// Theme switch provider:
export const ThemeSwitchProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage(false);

  const toggleDarkMode = () => {
    // The toggleDarkMode function toggles the state between dark and light modes:
    setDarkMode(!darkMode);
  };

  return (
    <ThemeSwitchContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};
```

# Utilities

A utility is a helper function or module that provides specific functionality.

- [StyleSheet:](https://reactnative.dev/docs/stylesheet) "A StyleSheet is an abstraction similar to CSS StyleSheets."

# Libraries

Popular libraries used in react-native projects:

- [npx expo install expo-av](https://docs.expo.dev/versions/latest/sdk/av/): video dependencies.
- [yarn add styled-components](https://classic.yarnpkg.com/en/package/styled-components): to style components and avoid inline styles.
- [yarn add @types/styled-components](https://www.npmjs.com/package/@types/styled-components): type definitions for styled-components.
- [npx expo install expo-font](https://docs.expo.dev/versions/latest/sdk/font/): support for expo text fonts.
- [npx expo install @expo-google-fonts/oswald](https://www.npmjs.com/package/@expo-google-fonts/oswald): installing a specific google font.
- [npx expo install expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/): for adding images and videos from the mobile device.
- [yarn add react-native-paper](https://reactnativepaper.com/) to create cards, search bar, and other components.
- [yarn add react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/): to handle safe area insets and display content correctly within the notch and corners.
- [yarn add react-native-vector-icons](https://classic.yarnpkg.com/en/package/@types/react-native-vector-icons): support for icons.
- [yarn add react-native-svg](https://www.npmjs.com/package/react-native-svg): support for SVG files.
- [npx expo install react-native-gesture-handler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/): single and double tap gestures.
- [npx expo install react-native-reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/): support for animations.
- [yarn add @react-navigation/native](https://reactnavigation.org/docs/getting-started/): system's navigation.
- [npx expo install react-native-screens](https://docs.expo.dev/versions/latest/sdk/screens/): system's navigation screens.
- [yarn add @react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/): system's bottom tabs.
- [yarn add @react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/): navigation stack.
- [yarn add react-native-swiper-flatlist](https://www.npmjs.com/package/react-native-swiper-flatlist): to create image carousels.
- [react-native-gifted-chat](https://www.npmjs.com/package/react-native-gifted-chat?activeTab=versions): for building a chat UI.
