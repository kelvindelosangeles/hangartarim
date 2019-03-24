import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './global/navbar/Navbar';
import Home from './pages/home/Home';

import Container from 'react-bootstrap/Container';
import Hakkimizda from './pages/hakkimizda/Hakkimizda';
import Hizmetlerimiz from './pages/hizmetlerimiz/Hizmetlerimiz';
import Iletisim from './pages/iletisim/Iletisim';
import Footer from './global/footer/Footer';
// import Galeri from './pages/galeri/Galeri';

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
            {/* <Route exact path='/galeri' component={Galeri} /> */}
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
