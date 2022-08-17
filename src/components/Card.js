import React from 'react';
import styles from '../styles/Card_component.css';
const Card = ({ name, min, max, img, onClose, background, weather }) => {
  // acá va tu código
  console.log(background);
  var styleDiv = {
    backgroundImage: `url(assets/${background})`,
    resizeMode: 'cover',
    boxShadow: "1px 2px 9px #9E9E9E",
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
  return (
    <div >
      <div className={'card'} style={styleDiv}>
        <button onClick={onClose} className={'button_exit'}> X </button>
        <div className='card-content-background'>
        </div>
        <div className='card-content'>
            <h4 className={'card_Title'}>{name}</h4>
            <h1 className='card_weather'>
              {weather}°
            </h1>
            <p>
              <strong className='card_parraph_min'>min: {min}</strong> 
              <br />
              <strong className='card_parraph_max'>max:{max}</strong>
            </p>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen" className={'card_image'} />
        </div>
      </div>
    </div>
  );
};



export default Card;
