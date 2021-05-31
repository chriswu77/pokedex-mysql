import React from 'react';
import Pokemon from './Pokemon.jsx';

const PokemonList = (props) => {

  return (
    <div>
      {
        props.pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} updateName={props.updateName} delete={props.delete} />)
      }
    </div>
  );

};

export default PokemonList;