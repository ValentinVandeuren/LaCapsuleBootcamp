import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

import './styles/App.css';
import ScreenHome from './components/ScreenHome';
import screenmyarticles from './components/ScreenMyArticles';
import screensource from './components/ScreenSource';
import screenarticlesbysource from './components/ScreenArticlesBySource';
import wishlist from './reducers/article'

const store = createStore(combineReducers({wishlist}));

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route path="/screenmyarticles" component={screenmyarticles}  />
          <Route path="/screenarticlesbysource/:id" exact component={screenarticlesbysource}  />
          <Route path="/screensource" component={screensource}  />
          <Route path="*" component={ScreenHome}  />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
