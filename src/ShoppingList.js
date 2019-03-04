import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem, editItem } from './actions';
import ShoppingItem from './ShoppingItem';
import { StyledList } from './styled';

const ShoppingList = ({ items, deletion, edition }) => (
  <StyledList>
    {Object.values(items).map(item => (
      <ShoppingItem
        key={item.id}
        id={item.id}
        text={item.text}
        deleteItem={deletion}
        editItem={edition}
      />
    ))}
  </StyledList>
);

ShoppingList.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ).isRequired,
  deletion: PropTypes.func.isRequired,
  edition: PropTypes.func.isRequired,
};

export default connect(
  state => ({ items: state.items }),
  dispatch => ({
    deletion: (id) => {
      dispatch(deleteItem(id));
    },
    edition: (text, id) => {
      dispatch(editItem(text, id));
    },
  }),
)(ShoppingList);
