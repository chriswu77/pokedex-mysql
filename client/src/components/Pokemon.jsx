import React from 'react';

const Pokemon = (props) => {

  return (
    <div>
      <h3>{props.pokemon.name}</h3>
      <img src={props.pokemon.img} />
    </div>
  );

};

export default Pokemon;