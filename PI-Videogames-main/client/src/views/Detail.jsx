import { useEffect } from "react";
import { useParams, Link } from "react-router-dom" 
import { useDispatch, useSelector } from "react-redux";
import { getVideogameByID, removeDetail } from "../redux/actions";


const Detail = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const detailVideogame= useSelector((state)=> state.videoGamesDetail);

    useEffect(()=>{
        dispatch(getVideogameByID(id));
        return (()=> dispatch(removeDetail()))
    }, [id])

  return (
    <div>
        
        <Link to="/home">Página principal</Link>

        <h1>{detailVideogame.name}</h1>

        <p>{detailVideogame.description}</p>

        <img src={detailVideogame.background_image} alt="Portada del videojuego"/>

        <h2>Released: {detailVideogame.released}</h2>

        <h2>Rating: {detailVideogame.rating}</h2>

        <h2>Platforms:</h2>
        <ul>
            {
                detailVideogame.plataformas?.map((plataforma)=>{
                    return <li>
                        {plataforma}
                    </li>
                })
            }
        </ul>

        <h2>Genres:</h2>
        <ul>
            {
                detailVideogame.generos?.map((genero)=>{
                    return <li>
                        {genero}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Detail