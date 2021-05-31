import React from 'react';
import ListItem from './ListItem.jsx';

const Dropdown = (props) => {

  const onChange = (e) => {
    if (e.target.value !== 'Sort by Type') {
      props.filterType(e.target.value);
    }
  };

  return (
    <select id="types" onChange={onChange}>
    <option>Sort by Type</option>
    {
      props.types.map((type, index) => <ListItem type={type} key={index} />)
    }
    </select>
  );
};

export default Dropdown;