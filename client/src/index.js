import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import explore from './components/Pages/explore';
import about from './components/Pages/about';
import enterpriseDataTest from './components/Pages/enterpriseDataTest'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={explore}/>
    <Route path='/About' component={about} />
      <Provider store={store}>
        <Route path='/test' component={enterpriseDataTest} />
      </Provider>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
//registerServiceWorker();
