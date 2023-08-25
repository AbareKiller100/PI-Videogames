const Filter = ({handleOrigin, filterGames}) => {
  return (
    <form onSubmit={filterGames}>
        <select onChange={handleOrigin}>
            <option value="">default</option>
            <option value="DB">DB</option>
            <option value="API">API</option>
        </select>
        <button type="submit">Filtrar</button>
    </form>
  )
}

export default Filter