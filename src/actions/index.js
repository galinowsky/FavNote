import axios from 'axios';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,

      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/login', { username, password })
    .then(payload => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: { ...payload },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};
