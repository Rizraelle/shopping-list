import {
  ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SET_ITEMS,
} from '../actions/action-types';

const initialState = {
  items: {},
};

const itemsReducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    const { text, id } = action;
    return {
      ...state,
      items: { ...state.items, [id]: { text, id } },
    };
  }
  if (action.type === DELETE_ITEM) {
    const { id } = action;
    const { items } = state;
    const newObject = { ...items };
    delete newObject[id];
    return {
      ...state,
      items: { ...newObject },
    };
  }
  if (action.type === EDIT_ITEM) {
    const { text, id } = action;
    return {
      ...state,
      items: { ...state.items, [id]: { text, id } },
    };
  }
  if (action.type === SET_ITEMS) {
    const { items } = action;
    return {
      ...state,
      items,
    };
  }
  return state;
};

export default itemsReducer;
