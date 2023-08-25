const SearchBar=({handleSearch, handleGetGames})=>{
    return <form onChange={handleSearch} >
        <input  />
        <button onClick={handleGetGames}>Search</button>
    </form>
}

export default SearchBar