import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.name
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.updateName(this.props.pokemon.id, this.state.input);
    this.props.toggleEdit();
  }

  render() {
    return (
      <form>
        <label>
          Name
          <input type="text" onChange={(e) => this.setState({input: e.target.value})} />
        </label>
        <button type="submit" onClick={this.onSubmit} >Submit</button>
      </form>
    );
  }
}
