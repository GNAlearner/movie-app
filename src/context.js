import React, { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const[isError, setIsError] = useState({show: "false", msg: ""})
    const [querry, setQuerry] = useState('titanic');

    const getMovies = async(url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: ""
                })
                setMovie(data.Search);
            } else {
                setIsLoading(true);
                setIsError({
                    show: "true",
                    msg: data.Error
                })
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${querry}`);
        },500)

        return () => clearTimeout(timerOut);
    },[querry])

    return <AppContext.Provider value={{isLoading, isError, movie, querry, setQuerry}}>
            {children}
        </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};