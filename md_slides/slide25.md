Drop all events except the last one:

```
function getLastFromBatch<T>(): MessageFilterFunction<T[], T> {
  return (onComplete) => (events) => {
    if (events.length > 0) onComplete(events.pop());
  };
}
```