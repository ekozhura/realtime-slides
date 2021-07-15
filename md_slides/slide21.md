### Buffering strategy

Processing candidates produces `CANDIDATE_UPDATE` events, so we can buffer some amount of candidates ids and request them at once:

```ts
subscribe(candidatesIds => {
    getCandidatesList(searchId, candidatesIds);
});
```