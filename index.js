import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {fetchBear} from './action';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducer)
store.dispatch(fetchBear());
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
   , document.getElementById('root'));

