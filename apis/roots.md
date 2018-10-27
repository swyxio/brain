---
name: Roots
menu: APIs
---

# Roots

These are concurrent-ready attachment points for React onto the DOM.

## `ReactDOM.createRoot and Root.render`

_@canary API: `ReactDOM.unstable_createRoot`_
_@next API: `ReactDOM.createRoot`_

Instead of `ReactDOM.render`, `ReactDOM.createRoot` automatically opts into `<ConcurrentMode>`. It also doesn't assume the first render is synchronous (aka you can suspend even on the first render, which useful for prerendering via `root.createBatch()`).

Roots expose a number of methods, the main of which is `Root.render`:

```js
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

> ⚠️ Everything below here is EVEN MORE UNSTABLE/UNTESTED THAN IN THE REST OF THIS PAGE SO IT IS PRETTY DAMN UNRELIABLE YOU HAVE BEEN WARNED ⚠️

## `Root.prerender`

_Current API: `Root.prerender()`_

Does render phase work but does not commit yet.

```js
const root = ReactDOM.createRoot(containerEl);
const work = root.prerender(<App />);
// ... other async work ...
work.commit();
```

## `ReactDOM.createLazyRoot`

_@canary API: `ReactDOM.unstable_createLazyRoot`_
_@next API: `ReactDOM.createLazyRoot`_

Start rendering even without a container:

```js
let containerEl;
const root = ReactDOM.unstable_createLazyRoot(function getContainer() {
  return containerEl;
});
const work = root.prerender(<App />);

// no container until now!
containerEl = await promiseForContainer;
work.commit();
```

---

> Next: [Misc APIs](/apis/misc-apis.md)

---

**Recommended Sources for further info:**

- Coordinating Async react - [gist](https://gist.github.com/acdlite/f31becd03e2f5feb9b4b22267a58bc1f)
- [createRoot proposal](https://github.com/facebook/react/issues/10366)
