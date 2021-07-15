Example of aggregate function for `SEARCH_UPDATED`:

```ts
const getSearchesEventFilters = () =>
  pipeFilters(
    aggregateTimeout(TIMEOUT),
    getLastFromBatch()
  );
```