import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
    watchlist : [],
    watched : []
}

export const GlobalProvider = (props) => {

    const[state, dispatch] = useReducer(AppReducer, initialState);

    const addMovieToWatchlist = (movie) =>{
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST",payload:movie})
    }

    const removeMovieFromWatchList = (id) =>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    const addMovieToWatched =(movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie})
    }

    const moveToWatchList = (movie) =>{
        dispatch({type:"MOVE_MOVIE_TO_WATCHED",payload:movie})
    }

    const removeMovieFromWatched = (id) =>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHED", payload: id})
    }

    console.log(state)
    return <GlobalContext.Provider
     value={{
        watchlist : state.watchlist,
        watched : state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeMovieFromWatched,
    }}
    >
        {props.children}
        </GlobalContext.Provider>
};
 