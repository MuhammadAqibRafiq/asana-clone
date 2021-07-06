import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mytasks from './pages/Mytasks';
import Inbox from './pages/Inbox';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mytasks' component={Mytasks} />
          <Route path='/inbox' component={Inbox} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

