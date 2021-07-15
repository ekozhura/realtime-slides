Compose filtering functions

```ts
const pipeFilters = function(
  filterA,
  filterB
) {
  return (onComplete) => filterA(filterB(onComplete));
};
```