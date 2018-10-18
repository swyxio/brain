---
name: Scheduler and Time Slicing
menu: APIs
---

# Time-Slicing

Time Slicing is a generic way to ensure that high-priority updates don’t get blocked by a low-priority update.

**Problems it solves**: When rendering is **CPU-bound**.

## Important Concepts

DOM Updates have **high** and **low** priority. 

- **High Priority**: Updates involving user input (e.g. text inputs)
- **Low Priority**: Updates involving data loading or expensive calculation

*TODO: add screenshot showing sliced rendering.*

**VERY IMPORTANT NOTE:** Concurrent React sets priorities for you by default. 
If you are using `react-dom` event handlers, you do NOT need to use `scheduleCallback` or `flushSync`.

 If you use React to listen to events (e.g `on*`), 
 it will already pick the appropriate priority when you enqueue a state change 
 (e.g a `onKeyDown` will be high priority and a `onMouseOver` low pri)

The scheduler API below is more or less an escape hatch if you need more control.

## `scheduleCallback` Example 

*Current API: `scheduler.unstable_scheduleCallback`*

`scheduleCallback` schedules an asynchronous, low priority, non blocking update to the DOM.

```js
// inside event handler...
  scheduleCallback(() => {
    this.setState({update: 'lowPriority'});
  });
```

## `flushSync` Example 

*Current API: `ReactDOM.flushSync`*

`flushSync` schedules a synchronous, high priority, blocking update to the DOM.

```js
// inside event handler...
  flushSync(() => {
    this.setState({update: 'highPriority'});
  });
```

Also see the Time Slicing Fixture: [Live Demo](https://timeslicing-unstable-demo.surge.sh/) and [Source Code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/time-slicing)

--- 

> Next: [React Suspense](/apis/react-suspense.md)

--- 

**Recommended Sources for further info:**

- [The Evolution of React and GraphQL at Facebook - F8 2017](https://developers.facebook.com/videos/f8-2017/the-evolution-of-react-and-graphql-at-facebook-and-beyond/)
- JSConf Iceland 2018 - [Video](https://www.youtube.com/watch?v=nLF0n9SACd4) and [Source Code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/time-slicing)
- [Time Slicing Umbrella Issue](https://github.com/facebook/react/issues/13306)
