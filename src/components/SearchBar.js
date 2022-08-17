const SearchBar = (props) => {
  // acá va tu código
  // tip, puedes usar un map
  const input = {
    border: '1px solid white',
    borderRadius: "10px",
    padding: "5px",
    width: "400px"
  }

  const button = {
    borderRadius: "35px",
    width: "38px",
    height: "38px",
    backgroundColor: "white", 
    border: "1px solid white",
    margin: "10px"
  }
  return <div>
      <input placeholder="Buscar la ciudad" style={input}/>
      <button onClick={() => props.onSearch('Santiago')} style={button}>
        <i class="bi bi-search-heart"></i>
      </button>
  </div>;
};

export default SearchBar;
