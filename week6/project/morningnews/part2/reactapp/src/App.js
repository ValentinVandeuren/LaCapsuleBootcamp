import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import ScreenHome from './components/ScreenHome';
import screenmyarticles from './components/ScreenMyArticles';
import screensource from './components/ScreenSource';
import screenarticlesbysource from './components/ScreenArticlesBySource';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ScreenHome} />
        <Route path="/screenmyarticles" component={screenmyarticles}  />
        <Route path="/screenarticlesbysource/:id" exact component={screenarticlesbysource}  />
        <Route path="/screensource" component={screensource}  />
        <Route path="*" component={ScreenHome}  />
      </Switch>
    </Router>
  );
}

export default App;
