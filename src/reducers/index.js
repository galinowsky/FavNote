import {
  // ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCES,
  // ADD_ITEM_FAILURE,
  // REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCES,
  // REMOVE_ITEM_FAILURE,
  // AUTH_REQUEST,
  AUTH_SUCCESS,
  // AUTH_FAILURE,
  // FETCH_REQUEST,
  FETCH_SUCCESS,
  // FETCH_FAILURE,
} from 'actions';

const initialState = {
  //  userID: "5f875cd264ee6438a0613f92"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };

    case AUTH_SUCCESS: {
      return {
        ...state,
        userID: action.payload.data._id,
      };
    }
    case REMOVE_ITEM_SUCCES:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };

    case ADD_ITEM_SUCCES:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };

    default:
      return state;
  }
};

export default rootReducer;
