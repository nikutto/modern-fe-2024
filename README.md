# Modern-FE-2024

## What is this for?

To learn and build modern FE environment.

## Techstack

### Language related

- Typescript
- Node.js
- npm
- asdf
  - Version management for node or npm

### Architecture and Framework related

- JAMstack
  - JAM stands for...
    - J: Javascript
    - A: API
    - M: Markup
  - SSG + CSR
- Next.js

## My Reasons

### Techstack

#### Why using JAMstack instead of SSR

I decide using JAMstack by following reasons.
- Performance
- Development flexibility

SSR cost performance is not so good.
SSR performance advantage over SSG + CSR is rendering time.
I think rendering time is faster than SSG + CSR by following reason, 
but it is not so large.
- Smaller round trip time between rendering engine and server
  - SSR also requires a call to the server.
  - So this is ignorable for many purposes, I think.
- Dynamic data can be rendered with server spec, not by client spec
  - I think today's client spec is not so bad.

SSG + CSR has flexibility advantage.
SSR requires BE to be SSR server.
Although we can design as microservice, it requires API gateway to be SSR server.
So, SSR server developer must be required.
SSG + CSR have no limit such like that, 
we can develop BE by many languages.

#### Why using Next.js

Just I like React.
I also considered SolidJS, but SolidJS has some unique pitfall like following.
```
function Counter() {
  const [count, setCount] = createSignal(0);
  setInterval(() => setCount(count() + 1), 1000);
  const c = count(); // This not work. count() must be inner return expression.
  return <div>Count: {c}</div>;
}
```

Reference: https://qiita.com/uhyo/items/ff243a5771077aaf4b5b
