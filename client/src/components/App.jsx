import React from 'react';
import axios from 'axios';
import Dropdown from './Dropdown.jsx';
import PokemonList from './PokemonList.jsx';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pokemons: [],
      types: []
    }
  }

  componentDidMount() {
    this.getTypes();
    this.getAll();
  }

  getAll = () => {
    axios.get('/pokemons')
    .then((res) => {
      this.setState({
        pokemons: res.data
      }, () => console.log(this.state.pokemons));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getTypes = () => {
    axios.get('/pokemons/types')
      .then((res) => {
        this.setState({
          types: res.data.map((typeObj) => typeObj.type)
        }, () => console.log(this.state.types));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filterType = (type) => {
    axios.get(`/pokemons/types/${type}`)
    .then((res) => {
      this.setState({
        pokemons: res.data
      }, () => console.log(this.state.pokemons));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  updateName = (id, newName) => {
    axios.put(`/pokemons/${id}`, { newName })
    .then((res) => {
      const copy = [...this.state.pokemons];
      const index = copy.findIndex((pokemon) => pokemon.id === id);
      copy[index]['name'] = newName;

      this.setState({
        pokemons: copy
      }, () => console.log(this.state.pokemons));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  delete = (id) => {
    axios.delete(`/pokemons/${id}`)
    .then((res) => {
      const copy = [...this.state.pokemons];
      const index = copy.findIndex((pokemon) => pokemon.id === id);
      copy.splice(index, 1);

      this.setState({
        pokemons: copy
      }, () => this.getTypes());
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button onClick={this.getAll}>Show All</button>
        <Dropdown types={this.state.types} filterType={this.filterType} />
        <PokemonList pokemons={this.state.pokemons} updateName={this.updateName} delete={this.delete} />
      </div>
    );
  }
}


// const App = () => (
//   <div>
//     <h1>Fullstack Pokedex!</h1>
//     <button>Show All</button>
//     <select id="types">
//       <option>Sort by Type</option>
//       <option>Grass</option>
//       <option>Fire</option>
//       <option>Water</option>
//     </select>
//     <div>
//       <h3>Bulbasaur</h3>
//       <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Ivysaur</h3>
//       <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Venusaur</h3>
//       <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
//     </div>
//   </div>
// )