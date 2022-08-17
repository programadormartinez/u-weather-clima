import './App.css';
import React from 'react';
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import data, { Cairns } from './data.js';

const App = () => {
  return (
    <div className="App">
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
        <hr style={
          {
            color: 'white'
          }
        }/>
      </div>
      <div className="container">
        <div>
          <Card max={Cairns.main.temp_max} min={Cairns.main.temp_min} name={Cairns.name} background={Cairns.main.background} img={Cairns.weather[0].icon} weather={Cairns.main.temp} onClose={() => alert(Cairns.name)} />
        </div>
        <div>
          <Cards cities={data} />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default App;
