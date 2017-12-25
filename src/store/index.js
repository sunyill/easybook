import { createStore ,compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
//   redux 使用步骤
//   import { createStore, applyMiddleware, compose } from 'redux';
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   const store = createStore(reducer, /* preloadedState, */ compose(
//      applyMiddleware(...middleware)
//    ));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
