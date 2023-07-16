
const Paginado = ({prev, next}) => {
  return (
    <div>
        <button onClick={prev}>Página anterior</button>
        <button onClick={next}>Página siguiente</button>
    </div>
  )
}

export default Paginado