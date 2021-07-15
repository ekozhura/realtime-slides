Let's add some mediator

```ts
const consumer = new MessageConsumer();
connection.subscribe(consumer.onEvent);
```

`MessageConsumer` is just an observer.

```ts
class MessageConsumer {
    _listener = null;

    onEvent(event) { this._process(event); }
    subscribe(cb) { this._listener = cb; }
    unsubscribe() { this._listener = null; }
    _process(event) { 
        this._listener && this._listener(event); 
    }
}
```

