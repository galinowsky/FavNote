import { createStore } from 'redux';
import reducer from 'reducers';

const store = createStore(
reducer /* preloadedState, */, 
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store