import Card from './Card';

const Cards = ({ cities }) => {
  if (cities) {
    return (
      <div className="">
        <div className="row align-items-start">
          {cities.map((city) => (
            <div className="col">
              <Card key={city.id} max={city.main.temp_max} min={city.main.temp_min} name={city.name} background={city.main.background} img={city.weather[0].icon}   weather={city.main.temp} onClose={() => alert(city.name)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>No hay ciudades</p>
    </div>
  );
};

export default Cards;
