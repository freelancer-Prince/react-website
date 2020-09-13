import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import NotFound from './Component/NotFound/NotFound';
import NavBar from './Component/NavBar/NavBar';
import Contact from './Component/Contact/Contact';
import DownlodeCV from './Component/DownlodeCV/DownlodeCV';
import WebsiteBuilder from './Component/WebsiteBuilder/WebsiteBuilder';
import Registration from './Component/Registration/Registration';

function App() {
  return (
   <Router>
     <NavBar />
     <Switch>
       <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/websitebuilder">
          <WebsiteBuilder />
        </Route>
        <Route exact path="/downlodeCV">
          <DownlodeCV />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
