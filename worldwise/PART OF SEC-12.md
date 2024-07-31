# PART OF SECTION-12

## THE BUNDLE AND CODE SPLITTING

- 👉 **Bundle**: JavaScript file containing the **entire application code**. Downloading the bundle will load **the entire app at once**, turning it into a SPA
- 👉 **Bundle size**: Amount of JavaScript users have to download to start using the app. One of the most important things to be optimized, so that the bundle takes **less time to download**
- 👉 **Code splitting**: Splitting bundle into multiple parts that can be **downloaded over time** ("lazy loading")

## DON'T OPTIMIZE PREMATURELY!

### DO

- ✔️ Find performance bottlenecks using the Profiler and visual inspection(laggy UI)
- ✔️ Fix those real performance issues
- ✔️ Memoize expensive re-renders
- ✔️ Memoize expensive calculations
- ✔️ Optimize context if it has many consumers and changes often
- ✔️ Memoize context value + child components
- ✔️ Implement code splitting + lazy loading for SPA routes

### DON'T

- 🚫 **Don't optimize prematurely!**
- 🚫 Don't optimize anything if there is nothing to optimize...
- 🚫 Don't wrap all components in `memo()`
- 🚫 Don't wrap all values in `useMemo()`
- 🚫 Don't wrap all functions in `useCallback()`
- 🚫 Don't optimize context if it's not slow and doesn't have many consumers

## USEEFFECT DEPENDENCY ARRAY RULES

### DEPENDENCY ARRAY RULES

- ☝️ Every **state variable**, **prop**, and **context value** used inside the effect **MUST** be included in the dependency array
- ☝️ **All "reactive values" must be included!** That means any function or variable that reference **any other** reactive value
- ☝️ Dependencies choose themselves: **NEVER** ignore the exhaustive-deps ESLint rule!
- ☝️ Do **NOT** use **objects** or **arrays** as dependencies (objects are recreated on each render, and React sees new objects as **different**, {} !== {})

> 👋 The **same rules** apply to the dependency arrays of other hooks: `useMemo` and `useCallback`

## REMOVING UNNECESSARY DEPENDENCIES

### 🤖 REMOVING FUNCTION DEPENDENCIES

- 👉 Move function **into the effect**
- 👉 If you need the function in multiple places, **memoize it**(`useCallback`)
- 👉 If the function doesn't referencr any reactive values, move it **out of the component**

### 📦 REMOVING OBJECT DEPENDENCIES

- 👉 Instead of including the entire object, include **only the properties you need**(primitive values)
- 👉 If that doesn't work, use the same strategies as for functions (**moving** or **memoizing** object)

### 🎯 OTHER STRATEGIES

- 👉 If you have **multiple related reactive values** as dependencies, try using a **reducer**(`useReducer`)
- 👉 You don't need to include `setState`(from `useState`) and `dispatch`(from `useReducer`) in the dependencies, as **React guarantees them to be stable** across renders

## WHEN NOT TO USE AN EFFECT

> ☝️ Effect should be used as a last resort, when no other solution makes sense. React calls them an "escape hatch" to step outside of React

### THREE CASES WHERE EFFECTS ARE OVERUSED:

> Avoid these as a beginner

1. **Responding to a user event**. An event handler function should be used instead
2. **Fetching data on component mount**. This is fine in small apps, but in real-world app, a library like React Query should be used
3. **Synchronizing state changes with one another** (setting state based on another state variable). Try to use derived state and event handlers
   We actually do this in the current project, but for a good reason😅
