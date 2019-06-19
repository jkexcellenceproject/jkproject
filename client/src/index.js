import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
=======
import reduxThunk from 'redux-thunk';
>>>>>>> Modified EnglishArticleCard.js
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import './styles/common.scss';
import './styles/style.scss';


import App from './components/App';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);