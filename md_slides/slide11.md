We decided to stick with SSE and use them mainly to notify our UI about changes in `SearchInfo` and `CandidateInfo` models

```ts
const connection = new SSEConnection();

connection.subscribe(function(event) {
  if (event.type === 'SEARCH_UPDATED') {
    getSearchInfo(event.payload.searchId);
  } else if (event.type === 'CANDIDATE_UPDATED') {
    getCandidateInfo(event.payload.candidateId);
  }
});

...

connection.unsubscribe();
```