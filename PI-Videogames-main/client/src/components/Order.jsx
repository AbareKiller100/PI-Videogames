
const Order = ({handleOrder, orderGames}) => {
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A-Z">Ascendente</option>
        <option value="Z-A">Descendente</option>
        <option value="ratAsc">Rating-ascendente</option>
        <option value="ratDes">Rating-descendente</option>
      </select>
      <button onClick={orderGames}>Ordenar</button>
    </div>
  )
}

export default Order