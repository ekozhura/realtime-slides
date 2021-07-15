Somewhere in our providers:

```ts
useEffect(() => {
    consumer.subscribe(function() => {
        if (event.type === 'SEARCH_UPDATED') {
            getSearchInfo(event.payload.searchId);
        } else if (event.type === 'CANDIDATE_UPDATED') {
            getCandidateInfo(event.payload.candidateId);
        }
    });
    return () => {
        consumer.unsubscribe();
    }
}, [getSearchInfo, getCandidateInfo]);

```