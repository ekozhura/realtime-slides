Each user action updates not only statuses, but triggers re-processing for candidate.


```ts
await updateCandidateStatus(candidateId, newStatus);

getSearchInfo(searchId);
getCandidateInfo(candidateId);
```

But since processing is distributed across several services, `searchInfo` and `candidateInfo` updates cannot be synchronous.