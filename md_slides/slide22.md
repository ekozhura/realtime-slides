### Aggregate functions

```ts
type MessageFilterFunction<T, S> = (
  onComplete: (event: S) => void
) => (event: T) => void;
```
```ts
function simpleFilter<T>(): MessageFilterFunction<T, T> {
  return (onComplete) => (event) => {
    onComplete(event);
  };
}
```