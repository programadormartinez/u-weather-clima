const SearchBar = (props) => {
  // acá va tu código
  // tip, puedes usar un map
  return <div>
    <input placeholder="Ciudad"/>
    <button onClick={() => props.onSearch('Santiago')}>Agregar</button>
  </div>;
};

export default SearchBar;
