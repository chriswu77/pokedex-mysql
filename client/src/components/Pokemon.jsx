import React from 'react';
import NameForm from './NameForm.jsx';

export default class Pokemon extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit
    }));
  }

  render() {

    let displayName;

    if (this.state.edit) {
      displayName = <NameForm pokemon={this.props.pokemon} toggleEdit={this.toggleEdit} updateName={this.props.updateName} />;
    } else {
      displayName = <h3 onClick={this.toggleEdit}>{this.props.pokemon.name}</h3>;
    }

    return (
      <div>
        {displayName}
        <img src={this.props.pokemon.img} />
        <button type="button" onClick={() => this.props.delete(this.props.pokemon.id)}>Delete</button>
      </div>
    );
  }

}
