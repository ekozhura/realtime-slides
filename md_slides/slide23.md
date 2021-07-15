Buffering with timeout

```ts
function aggregateTimeout<T>(
  _timeout: number
): MessageFilterFunction<T, T[]> {
  let _queue: T[] = [];
  let _intervalId: number = null;
  return (onComplete) => (event) => {
    if (_queue.length === 0) {
      clearTimeout(_intervalId);
      _intervalId = window.setTimeout(() => {
        onComplete(_queue);
        _queue = [];
      }, _timeout);
    }
    _queue.push(event);
  };
}
```