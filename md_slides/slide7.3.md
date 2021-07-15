When we run processing of the whole list of candidates, things get really nasty:

```ts
await startProcessing(searchId); // wait until processing starts

setInterval(function() {
    getSearchInfo(searchId);
    getCandidatesList(searchId);
}, 10000);
```

we don't really know which candidates are already processed, so we re-fetch all of them constantly each 10s.