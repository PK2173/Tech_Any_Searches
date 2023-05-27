// Context Creation Complete
// we need a provider
// consumer lenghty remove
// use context hook
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppCotext = React.createContext();

let API = 'https://hn.algolia.com/api/v1/search?'
const initatalState = {
    isloding : true,
    query: '',
    nbPages : 0,
    page : 0,
    hits: []
}


const AppProvider = ({children}) =>{

    // const [state, setstate] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initatalState)



    const fetchAPIdata = async (url) =>{
        dispatch({
            type:"SET_LOADING"
        })
        try {
            const res = await fetch(url)
            const data = await res.json()

            dispatch({
                type:'GET_STORIES',
                payload:{
                    hits: data.hits, // here Hits just a varible not a initatalState part
                    nbPages : data.nbPages
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

    const removePost = (post_id) =>{
        dispatch({
            type : "REMOVE_POST",
            payload : post_id
        })
    }

    // Pgae Change
    const pageItriate = (change)=>{
        dispatch({
            type:'PAGE_CHANGER',
            payload : change
        })
    }

    // search

    const seearchPost = (searchquery)=>{
        dispatch({
            type: "SEARCH_POST",
            payload : searchquery
        })
    }

    // call the api funtionn



    useEffect(() => {
        fetchAPIdata(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query,state.page])

    return(
        <AppCotext.Provider value={{...state , seearchPost, removePost, pageItriate}}>{children}</AppCotext.Provider>
    )
}



const useGlobleContext = ()=>{
    return(
        useContext(AppCotext)
    )
}

export { AppProvider, AppCotext, useGlobleContext}