
 export const  memoizationState = {
  searchArtist: {},
  artistPaginationResult: {}
};

export const MemoizationType = {
  SET_ARTIST_SEARCH_RESULT:  "SET_ARTIST_SEARCH_RESULT",
  SET_ARTIST_PAGINATION_RESULT: "SET_ARTIST_PAGINATION_RESULT"
}

export const setMemoization = ( type, payload, value ) => {

  switch(type) {
    case MemoizationType.SET_ARTIST_SEARCH_RESULT:
      memoizationState.searchArtist[value] = payload;
    break;
    case MemoizationType.SET_ARTIST_PAGINATION_RESULT:
      memoizationState.artistPaginationResult[value] = payload;
    break;
  }

}
