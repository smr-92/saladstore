import React from 'react';
import './App.css';
import Header from './compnents/Header';
import Home from './compnents/Home';
import Ingredients from './compnents/Ingredients';
import Cart from './compnents/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (

    <Container fluid={true} className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/orderdetails" component={Cart} />
        </Switch>
      </Router>
    </Container>

  );
}

export default App;
