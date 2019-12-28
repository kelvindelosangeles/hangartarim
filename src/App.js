import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './global/Navbar';
import Home from './pages/Home';

import Container from 'react-bootstrap/Container';
import Hakkimizda from './pages/Hakkimizda';
import Hizmetlerimiz from './pages/Hizmetlerimiz';
import Iletisim from './pages/Iletisim';
import Footer from './global/Footer';
import Galeri from './pages/galeri/Galeri';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/hakkimizda' component={Hakkimizda} />
            <Route exact path='/hizmetlerimiz' component={Hizmetlerimiz} />
            <Route exact path='/iletisim' component={Iletisim} />
            <Route exact path='/galeri' component={Galeri} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
