import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import statuses from './modules/statuses';
import {initSagas} from './initSagas';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));

export default function configureStore() {
  const rootReducer = combineReducers({
    statuses
  });
  const store = compose(
    enhancer
  )(createStore)(rootReducer);
  initSagas(sagaMiddleware);

  return store;
}