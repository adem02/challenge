import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import CreateProject from './components/Create';
import ProjectsList from './components/ProjectList';
import UpdateProject from './components/Update';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/create-project" component={CreateProject} />
        <Route path="/create-project" component={CreateProject} />
        <Route path="/projects-list" component={ProjectsList} />
        <Route path="/update-project/:id" component={UpdateProject} />
        <Route path="**" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
