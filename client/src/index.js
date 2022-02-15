import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

let store = createStore(reducers, {}, applyMiddleware(reduxThunk));

if (process.env.NODE_ENV === 'development') {
    const composeMiddleware = compose (applyMiddleware(reduxThunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store = createStore(reducers, {}, composeMiddleware);
}

ReactDOM.render(
    <Provider store = {store}><App /></Provider>,
    document.querySelector('#root')
);
