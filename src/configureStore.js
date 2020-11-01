import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];
const createStoreWithMiddlware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddlware(rootReducer);
