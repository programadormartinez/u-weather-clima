import React from 'react';
import styles from '../styles/Card_component.css';

const Card = ({ name, min, max, img, onClose }) => {
  // acá va tu código
  return (
    <div className={'container'}>
      <div className={'card'}>
        <button onClick={onClose} className={'icon_exit'}> X </button>
        <h4 className={'card_Title'}>{name}</h4>
        <p>min</p>
        <p>{min}</p>
        <p>max</p>
        <p>{max}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen" className={'card_image'} />
      </div>
    </div>
  );
};

export default Card;
