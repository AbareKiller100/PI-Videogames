import {Link} from "react-router-dom"

const VideogameCard = ({id, name, background_image, genres}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <h2>{name}</h2>
        <ul>
            {
              genres?.map((genre)=>{
                return <li>{genre}</li> 
              })
            }
        </ul>
        <h2>{background_image}</h2>
      </div>
    </Link>
  )
}

export default VideogameCard