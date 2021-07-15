### Dropping strategy 

Resume uploads produce amount of `SEARCH_UPDATED` events with the same searchId, so we can update `SearchInfo` only once in 500ms. 
Thus, we can apply dropping (or sampling) strategy.