const Card = ({name, min, max, img, onClose}) => {
  // acá va tu código
  return <div>
    <button onClick={onClose} > X </button>
    <h4>
      {name}
    </h4>
    <p>
      min
    </p>
    <p>
      {min}
    </p>
    <p>
      {max}
    </p>
    <p>
      {max}
    </p>
    
    <img  src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen"/>
  </div>;
};

export default Card;
