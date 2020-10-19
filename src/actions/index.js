import axios from 'axios';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCES = 'REMOVE_ITEM_SUCCES';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';
export const ADD_ITEM = 'ADD_ITEM';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

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
  console.log({ username, password });
  return axios
    .post('http://localhost:9000/api/user/login', { username, password })
    .then(payload => {
      // console.log(payload)
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

export const fetchItems = itemType => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });
  // console.log(getState())
  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID,
      },
    })
    .then(({ data }) => {
      // console.log(data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};


export const deleteItem = (itemType,id) => (dispatch) =>{
   dispatch({ type:REMOVE_ITEM_REQUEST});
console.log({itemType,id})
  return axios
  .delete(`http://localhost:9000/api/note/${id}`)
  .then(() => {
    // console.log(payload)
    dispatch({
      type: REMOVE_ITEM_SUCCES,
      payload: {itemType , id},
    });
  })
  .catch(err => {
    console.log(err);
    // dispatch({ type: AUTH_FAILURE });
  });
}

export const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM_SUCCES,
  payload: {
    itemType,
    id,
  },
});
