import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import explore from './components/Pages/explore';
import about from './components/Pages/about';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={explore}/>
    <Route path='/About' component={about} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
//registerServiceWorker();
