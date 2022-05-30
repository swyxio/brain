	---
	name: Introduction
	route: /
	---

# Introduction: What is Concurrent React?

Concurrent React is an umbrella name for a new set of APIs resulting from the React Fiber rewrite.
It was previously known as "Async React".

The new name emphasizes React's new ability to concurrently render, suspend, and resume rendering frames
in the background _while remaining interactive_ (aka not destroying old frames while rendering the next).
This ability helps Concurrent React apps adapt to the user's device and network,
allowing for fast interactions to feel instant while slower interactions feel responsive.

Concurrent React includes features like **Time Slicing** and **React Suspense**.
New libraries have also been introduced in relation to these features, like `scheduler` and `react-cache`.

The canonical sources of information for Concurrent React is given in two talks by the React team:

- React Conf 2018: Concurrent Rendering in React: https://www.youtube.com/watch?v=ByBPyMBTzM0&t=1305s
- JSConf Iceland: Beyond React 16: https://www.youtube.com/watch?v=v6iR3Zk4oDY

You can try the demos here:

- Try the [React Suspense fixture](https://codesandbox.io/s/k3m2rq627o) or
- the [Time Slicing fixture](https://codesandbox.io/s/xl3rjr9mjo) or
- the [JSConf Iceland Movie Demo](https://codesandbox.io/s/r76q199xxn) on CodeSandBox.

There are also more talks available in the [Timeline](/Timeline.md).

As of 22 May 2019 these features were available (with `unstable_` flag):

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-cache](https://www.npmjs.com/package/react-cache) (note public version of `react-cache` has fallen out of sync with current version of react, use [react v16.6 alpha](https://www.npmjs.com/package/react-cache/v/16.6.0-alpha.8af6728) and [react-cache v16.6 alpha](https://www.npmjs.com/package/react-cache/v/16.6.0-alpha.8af6728) if need to)
- [scheduler](https://www.npmjs.com/package/scheduler)

This site is an attempt to sum up the state of knowledge with regards to Concurrent React.
It is curated by [swyx](http://twitter.com/swyx) and is not to be taken as a replacement for any
of the official communication from the React team.

## ⚠️ Unstable APIs ⚠️

This site is for early adopters only. Be warned that many APIs here are completely unstable.

It will be impossible to keep up with all the changes so examples may break when copy-pasted.

We will also write about APIs without the `unstable_` prefix, but it is very much implied.
We will note the current API at the start and for the rest of the section drop the `unstable_` prefix.

For example, see the next section on `<ConcurrentMode>`.

## `<ConcurrentMode>` deprecated

> 💀 This section used to document `<ConcurrentMode>`, but it [has been deprecated](https://github.com/facebook/react/pull/15532) for [reasons](https://github.com/facebook/react/pull/15502/files).

_Note: Your app must be `<StrictMode>` compliant first before you apply `ConcurrentMode` - [read more about StrictMode in the docs](https://reactjs.org/docs/strict-mode.html)_

## Alternatively; `ReactDOM.createRoot`

_API: `ReactDOM.unstable_createRoot`_

If you use this instead of `ReactDOM.render`, `ReactDOM.createRoot` creates Concurrent root for your whole app (yes, you can have multiple roots). For more info, see the separate Roots doc.

```js
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## What is Time Slicing?

Time Slicing is a generic way to ensure that high-priority updates don’t get blocked by a low-priority update.

**Problems it solves**: When rendering is **CPU-bound**.

## What is React Suspense?

React Suspense is a generic way for components to suspend rendering while they load data from a cache.

**Problems it solves**: When rendering is **I/O-bound**.

It is a fundamentally new capability that

- lets you render a component tree “in background”
- while components are fetching data, and
- display them only after the whole tree is ready.

For slow connections, it gives you full control over where and when to show a placeholder.
It doesn’t destroy the previous view while this is happening.

---

> Next: [Time Slicing](time-slicing.md)

---

**Recommended Sources for further info:**

- [React 16.3 and 16.4 Umbrella Issue](useful for pre-rendering via createBatch)
- [Codesandbox with running example](https://codesandbox.io/s/w0n9ok3mqw)
- [JSConf Iceland 2018 Demo](https://www.youtube.com/watch?v=nLF0n9SACd4)
- [Beyond React 16 Blogpost](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)
