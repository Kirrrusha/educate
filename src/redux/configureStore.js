import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import statuses from './modules/statuses';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default function configureStore() {
  const rootReducer = combineReducers({
    statuses
  });
  const store = compose(
    enhancer
  )(createStore)(rootReducer);

  return store;
}