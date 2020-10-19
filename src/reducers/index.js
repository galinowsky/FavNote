import {
  ADD_ITEM,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCES,
  REMOVE_ITEM_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from 'actions';

const initialState = {
//  userID: "5f875cd264ee6438a0613f92"
};

const rootReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };

    case AUTH_SUCCESS: {
      //  console.log(action)
      return {
        ...state,
        userID: action.payload.data._id,
      };
      // console.log(action)
    }
    case REMOVE_ITEM_SUCCES:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };

    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };

    default:
      return state;
  }
};

export default rootReducer;
