import VideogameCard from "./VideogameCard.jsx"

const VideogameCards = ({pag}) => {
  return (
    <div>
        {
          pag.map(({id, name, background_image, genres})=>{
              return(
                <VideogameCard
                  key={id}
                  id={id}
                  name={name}
                  background_image={background_image}
                  genres={genres}
                />
              )
          })
        }
    </div>
  )
}

export default VideogameCards