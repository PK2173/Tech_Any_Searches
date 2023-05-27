const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_STORIES':
            return {
                ...state,
                isloding : false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages
            }
        case 'SET_LOADING' :
            return {
                ...state,
                isloding : true,
            }

        case 'SEARCH_POST' :
            return {
                ...state,
                query : action.payload,
            }
        case  "REMOVE_POST":
            return {
              ...state,
              hits: state.hits.filter(
                (curElem) => curElem.objectID !== action.payload
              ),
            };
        case  "PAGE_CHANGER":
            let pageno = 1;
            if(action.payload === 'preview' && state.page > 0){
                pageno = pageno -1;
            }
            else if(action.payload === 'next' && state.page > 0){
                pageno = pageno +1;
            }
            return {
              ...state,
              page : pageno
            };
    
        default:
            break;
    }
    return state
};

export default reducer