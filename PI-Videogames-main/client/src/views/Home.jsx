import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { filterOrigin, getAllVideogames, getVideogamesByName, ordenar } from "../redux/actions.js";
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
import Order from "../components/Order.jsx";
import Paginado from "../components/Paginado.jsx";
import VideogameCards from "../components/VideogameCards.jsx";

const Home=()=>{
    const dispatch=useDispatch();

    const videogames=useSelector((state)=> state.videoGames)
    const videogamesCopy=useSelector((state)=> state.videoGamesCopy)

    const [startPag, setStartPag]= useState(0);
    const [endPag, setEndPag]= useState(15);

    const pag= videogamesCopy.slice(startPag, endPag);
    const cantJuegos= videogamesCopy.length;

    const next=()=>{
        if(endPag <= cantJuegos-1){
            setStartPag(endPag);
            setEndPag(endPag+15);
        } else{
           alert("Estás en la primer página")
        }
    }
    const prev=()=>{
        if(startPag>1){
            setStartPag(startPag-15);
            setEndPag(endPag-15)
        } else{
            alert("Terminaste el recorrido")
        }
    }

    const [filter, setFilter]=useState({
        origin:"", orden:""
    })

    const handleOrigin=(event)=>{
        setFilter({...filter, origin:event.target.value})
    }
    const filterGames=(event)=>{
        event.preventDefault()
        dispatch(filterOrigin(filter.origin,videogames))
        setFilter({...filter, origin:""});
    }

    const handleOrder=(event)=>{
        setFilter({...filter, orden:event.target.value})
    }
    const orderGames=(event)=>{
        event.preventDefault();
        dispatch(ordenar(filter.orden, videogamesCopy))
        setFilter({...filter, orden:""})
    }

    const [getName, setGetName]=useState("");

    const handleSearch=(event)=>{
        setGetName(event.target.value);
    }
    const handleGetGames=(event)=>{
        event.preventDefault()
        if(getName===""){
            setStartPag(0);
            setEndPag(15);
            dispatch(getAllVideogames());
        } else{
            setStartPag(0);
            setEndPag(15);
            dispatch(getVideogamesByName(getName))
        }
    }

    useEffect(()=>{ 
        dispatch(getAllVideogames());
        return (()=> dispatch(getAllVideogames()));
    }, [dispatch])

    return (
    <div>
        <SearchBar handleSearch={handleSearch} handleGetGames={handleGetGames}/>

        <div>
            <Filter handleOrigin={handleOrigin} filterGames={filterGames}/>
            <Order handleOrder={handleOrder} orderGames={orderGames}/>
        </div>

        <div>
            <Paginado prev={prev} next={next}/>
        </div>

        <div>
            <VideogameCards pag={pag}/>    
        </div>
    </div>
    )
}

export default Home;