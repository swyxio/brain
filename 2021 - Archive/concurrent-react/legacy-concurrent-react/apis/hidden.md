---
name: hidden
menu: APIs
---

# `hidden={true}`

_Current API: should be implemented in v16.7_

when a HTML component sets the `hidden={true}` property, React will automatically change the priority
of this subtree so that it won’t be part of the initial render.
The idea is to e.g have a tab component that can render out every window in advance so switching
tabs is super fast but it only needs to display the first tab’s content in the initial render so
the hidden tabs can be deprioritized.

---

> Next: [Roots](/apis/roots.md)

---

**Recommended Sources for further info:**

- Suspense! ReactFest 2018 - [Video](https://www.youtube.com/watch?v=6g3g0Q_XVb4)
