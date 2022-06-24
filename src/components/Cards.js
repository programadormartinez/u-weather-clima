import Card from "./Card";

const Cards = ({cities}) => {
  if (cities) {
    return (
      <div>
        {cities.map((city) => (
          <Card key={city.id} max={city.main.temp_max} min={city.main.temp_min} name={city.name} img={city.weather[0].icon} onClose={() => alert(city.name)} />
        ))}  
      </div>
    );
  }

  return (
    <div>
      <p>No hay ciudades</p>
    </div>);


  
};

export default Cards;
