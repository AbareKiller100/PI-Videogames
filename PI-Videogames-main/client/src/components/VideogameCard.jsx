import {Link} from "react-router-dom"

const VideogameCard = ({id, name, background_image, genres}) => {
  return (
    <div>
        <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <h2>
            {
                genres.map((genre)=>{
                    return <div>{genre}</div> 
                })
            }
        </h2>
        <h2>{background_image}</h2>
    </div>
  )
}

export default VideogameCard