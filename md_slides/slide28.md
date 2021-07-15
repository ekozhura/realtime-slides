Extend `MessageConsumer` to support aggregate functions:

```ts
class MessageConsumer {
  constructor(_filter?) {
    this._process = _filter
      ? _filter(this._runProcessing.bind(this))
      : this._runProcessing.bind(this);
  }

  ...

  private _runProcessing(event) {
    if (this._listener) {
      this._listener(event);
    }
  }
}
```