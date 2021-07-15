### WebSockets

1. Bidirectional.
2. Text and binary data.
3. Fast.

```ts
const socket = new WebSocket('wss://myapp.com/notifications');
socket.onmessage = function(event) { 
    try {
        let data = JSON.parse(event.data);
        updateDOM(data);
    } catch () {
        console.error("Error parsing data");
    }
};
```
Building API, based on WebSockets might require more efforts.