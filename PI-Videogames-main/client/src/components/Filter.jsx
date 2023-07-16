
const Filter = ({handleOrigin, filterGames}) => {
  return (
    <div>
        <select onChange={handleOrigin}>
            <option value="">default</option>
            <option value="BD">BD</option>
            <option value="API">API</option>
        </select>
        <button onClick={filterGames}>Filtrar</button>
    </div>
  )
}

export default Filter