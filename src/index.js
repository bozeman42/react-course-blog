import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/posts-index';
import promise from 'redux-promise';

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={PostsIndex} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
