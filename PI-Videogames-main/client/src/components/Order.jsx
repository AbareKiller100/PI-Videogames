
const Order = ({handleOrder, orderGames}) => {
  return (
    <form onSubmit={orderGames}>
      <select onChange={handleOrder}>
        <option value="A-Z">Ascendente</option>
        <option value="Z-A">Descendente</option>
        <option value="ratAsc">Rating-ascendente</option>
        <option value="ratDes">Rating-descendente</option>
      </select>
      <button type="submit">Ordenar</button>
    </form>
  )
}

export default Order