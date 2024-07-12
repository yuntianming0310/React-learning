# Section 2 - Handling Events & State

## WHAT WE NEED TO LEARN

- WHAT REACT DEVELOPERS NEED TO LEARN ABOUT STATE

  - **What is state** and **why** do we need it?
  - How to use state in **practice**

    - 👉 useState
    - 👉 useReducer
    - 👉 Context API

  - **Thinking** about state
    - 👉 When to use state
    - 👉 Where to place state
    - 👉 Types of state

**State** is the most important concept in React.

## WHAT IS STATE?

- 👉 Data that a component **can hold over time**, necessary for information that it needs to **remembers** throughout the app's lifecycle.

- 👉 **"Component's memory"** 🧠

- 👉 **"State variable" / "piece of state"** : A single variable in a component(component state)
  We use these terms interchangeably

- 👉 Updating **component state** triggers React to **re-render the component**

STATE ALLOWS DEVELOPERS TO:

- Update the component's view (by re-rendering it)
- Persist local variables between re-renders
  👋 State is a **tool**. Mastering state will unlock the power of React development.

## THE MECHANICS OF STATE IN REACT

- We don't do direct DOM manipulations
  Because React is a **declarative**
- How is a component view updated then?
- In React, a view is updated by re-rendering the component
  Important React principle
- A component is re-rendered when its state is updated
- So to update a view, we update state

**_React calls the component function again_**

- STATE
- REANDER / RE_RENDER
  👉 State is preserved throughout re-renders
- UPDATED VIEW

👉 React is called "React" because...

**"REACT"** REACTS TO STATE CHANGES BY RE-RENDERING THE UI

DATA ⇄ UI

## ONE COMPONENT, ONE STATE

> 👋 Each component has and manages **its own state**, no matter how many times we render the same component

## UI AS A FUNCTION OF STATE

**DECLARATIVE, REVISITED**

- 👉 With state, we view UI as a **reflection of data changing over time**
- 👉 We **describe that reflection** of data using state, event handlers, and JSX

## 🎯 IN PRACTICAL TERMS

### PRACTICAL GUIDELINES ABOUT STATE

- 👉 Use a state variable for any data that the component should keep track of("remember") over time. **This is data that will change at some point**. In Vanilla JS, that's a let variable, or an [] or {}

- 👉 Whenever you want something in the component to be **dynamic**, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "be dynamic")

  - 👉 **Example:** A modal window can be open or closed. So we create a state variable `isOpen` that tracks whether the modal is open or not. On `isOpen = true` we display the window, on `isOpen = false` we hide it.

- 👉 If you want to change the way a component looks, or the data it displays, **update its state.** This usually happens in an **event handler** function.

- 👉 When building a component, imagine its view as a **reflection of state changing over time**

- 👉 For data that should not trigger component re-renders, **don't use state**. Use a regular variable instead. This is a common **beginner mistake**.

## THE CHILDREN PROP

> An empty **"hole"** that can be filled by **any JSX the component receives** as children

- The children prop allow us **to pass JSX into an element** (besides regular props)
- Essential tool to make **reusable** and **configurabel** components (especially component **content**)
- Really useful for **generic** components that **don't know their content** before being used (e.g. modal)
