import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';
import {
  addItem, deleteItem, editItem, setItems,
} from './actions';
import { StyledHeader, StyledContainer, StyledButton } from './styled';

library.add(faTrash, faEdit, faCheck);

const JSONStore = 'https://www.jsonstore.io/22624edf69a247eb8a966a0e179ba36120ccc128a21b68078380ed4f0533697a';

class App extends Component {
  static propTypes = {
    items: PropTypes.objectOf(
      PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
      }),
    ).isRequired,
  };

  saveItems = () => {
    const { items } = this.props;
    fetch(JSONStore, {
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ items: { ...items } }),
    });
  };

  getItems = async () => {
    const { setting } = this.props;
    const response = await fetch(JSONStore).then(response => response.json());
    const {
      result: { items },
    } = response;
    setting(items);
  };

  render() {
    const { items } = this.props;
    return (
      <StyledContainer>
        <StyledHeader>Shopping List</StyledHeader>
        <ShoppingForm />
        <ShoppingList items={items} />
        <StyledButton onClick={this.saveItems}>Save</StyledButton>
        <StyledButton onClick={this.getItems}>Get Items</StyledButton>
      </StyledContainer>
    );
  }
}

export default connect(
  state => ({ items: state.items }),
  dispatch => ({
    adding: (text) => {
      dispatch(addItem(text));
    },
    deletion: (id) => {
      dispatch(deleteItem(id));
    },
    edition: (text, id) => {
      dispatch(editItem(text, id));
    },
    setting: (items) => {
      dispatch(setItems(items));
    },
  }),
)(App);
