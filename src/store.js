import {compose,combineReducers, createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

import home from '../src/Container/Home/reducer'



const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers({home}),composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)