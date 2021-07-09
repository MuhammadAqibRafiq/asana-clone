import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Mytasks from './components/Pages/Mytasks/Mytasks';
import Inbox from './components/Pages/Inbox/Inbox';

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

