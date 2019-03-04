import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';
import { addItem, deleteItem, editItem } from './actions';
import { StyledHeader, StyledContainer } from './styled';

library.add(faTrash, faEdit, faCheck);

class App extends Component {
  static propTypes = {
    items: PropTypes.objectOf(
      PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    const { items } = this.props;
    return (
      <StyledContainer>
        <StyledHeader>Shopping List</StyledHeader>
        <ShoppingForm />
        <ShoppingList items={items} />
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
  }),
)(App);
