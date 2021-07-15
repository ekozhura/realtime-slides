### Server-sent events

1. HTTP based.
2. Uni-directional (from server to client).
3. Text data only (`text/stream`).

```ts
const connection = new EventSource("/notifications");
connection.onmessage = function(event) { 
    try {
        let data = JSON.parse(event.data);
        updateDOM(data);
    } catch () {
        console.error("Error parsing data");
    }
};
```