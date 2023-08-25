import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import validation from '../validation.js'
import { getAllGenres, removeDetail } from '../redux/actions.js'
import axios from 'axios'
// import { URL } from '../App'

const Form = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres());
        return ()=> removeDetail()
    }, [dispatch]);

    const [info, setInfo]=useState({
        name:"", image:"", description:"", platforms:[], released:"", genres:[], rating:0
    })

    const [errors, setErrors]=useState({
        name:'', image:"", description:"", platforms:[], released:"", genres:[], rating:0
    })
    
    const handleInputChange=(event)=>{
        if(event.target.name==="rating"){
           Number(event.target.value);
        }
        setInfo({...info, [event.target.name]:event.target.value});
        setErrors(validation({...info, [event.target.name]:event.target.value}))
    }

    const genres=useSelector((state)=> state.genres);

    const selectGenres=(event)=>{
        if(event.target.checked){
            setInfo({...info, genres:[...info.genres, event.target.value]})
            setErrors(validation({...info, genres:[...info.genres, event.target.value]}))
        } else{
            setInfo({...info, genres:info.genres.filter((genre)=> genre !== event.target.value) })
            setErrors(validation({...info, genres:info.genres.filter((genre)=> genre !== event.target.value)}))
        }
    }

    const selectPlatforms=(event)=>{
        setInfo({...info, platforms:[event.target.value]})
        setErrors(validation({...info, platforms:[event.target.value]}))
    }

    const createVideogame=(event)=>{
        event.preventDefault();
        if(errors.name === '' && errors.description === '' && errors.background_image === '' && errors.platforms === '' && errors.released === '' && errors.rating === '' && errors.genres === ''){
            axios.post("localhost:3001", info)
            .then(response=> alert(response.data))
            .catch(error=> alert(error))
        } else{
            alert('Faltan datos')
        }
    }

    let i=0;

    return (
        <form onSubmit={createVideogame}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={info.name} onChange={handleInputChange}/>
                <span>{errors.name}</span>
            </div>

            <div>
                <label>Image:</label>
                <input type="url" name='image' value={info.image} onChange={handleInputChange}/>
                <span>{errors.image}</span>
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name='description' value={info.description} onChange={handleInputChange}/>
                <span>{errors.description}</span>
            </div>

            <div>
                <label htmlFor="platforms">Platforms:</label>
                <input type="text" name='platforms' value={info.platforms} onChange={selectPlatforms}/>
                <span>{errors.platforms}</span>
            </div>

            <div>
                <label htmlFor="released">Released:</label>
                <input type="date" name='released' value={info.released} onChange={handleInputChange}/>
                <span>{errors.released}</span>
            </div>  

            <div>
                <label>Genres:</label>
                {
                   genres.map((genre)=>{
                    i++
                    return <div key={i}>
                        <label>{genre}</label>
                        <input type="checkbox" name='genres' onClick={(event)=> selectGenres(event)} value={i}/>
                    </div>
                   }) 
                }
                <span>{errors.genres}</span>
            </div>

            <div>
                <label htmlFor="rating">Rating:</label>
                <input type="number" name='rating' value={info.rating} onChange={handleInputChange}/>
                <span>{errors.rating}</span>
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form