Usage:

```ts
const searchConsumer = new MessageConsumer(
    getSearchesEventFilters
);

const candidatesConsumer = new MessageConsumer(
    aggregateTimeout(500)
);
```

```ts
useEffect(() => {
    const unsub = searchConsumer.subscribe(({ searchId }) => {
        getSearchInfo(searchId);
    });
    return () => { unsub(); };
}, []);

useEffect(() => {
    const unsub = candidatesConsumer.subscribe(
        ({ searchId, candidatesIds }) => {
            getCandidatesList(searchId, candidatesIds);
        }
    );
    return () => { unsub(); };
}, []);

```