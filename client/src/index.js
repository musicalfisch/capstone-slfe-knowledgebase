import React from 'react';
import { render }from 'react-dom';
import './styles/main.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import explore from './components/Pages/explore.jsx';
import about from './components/Pages/about';
import result from './components/Pages/result.jsx';
import solution from './components/Pages/exampleSolution.jsx';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={explore}/>
      <Route path='/About' component={about} />
      <Route path='/Result' component={result} />
      <Route path='/Solution' component={solution} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
//registerServiceWorker();
