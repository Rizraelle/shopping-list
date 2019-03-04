import nanoid from 'nanoid';
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './action-types';

export const addItem = text => ({
  type: ADD_ITEM,
  text,
  id: `item ${nanoid()}`,
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  id,
});

export const editItem = (text, id) => ({
  type: EDIT_ITEM,
  text,
  id,
});
