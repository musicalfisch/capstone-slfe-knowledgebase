import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import explore from './components/Pages/explore';
import about from './components/Pages/about';
import result from './components/Pages/result.jsx';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={explore}/>
      <Route path='/About' component={about} />
      <Route path='/Result' component={result} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
//registerServiceWorker();
