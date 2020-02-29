import React from 'react';
import {Container, Row,Form,FormControl,Button} from 'react-bootstrap';
import Profile from './Profile';
import About from './About';
import Home from './Home';
import { Route } from 'react-router';

const Content =()=>{
    return (
        <div className="col-md-12">
           <Route path="/Home">
               <Home />
           </Route>           
           <Route path="/About">
               <About />
           </Route>
           <Route path="/Profile">
               <Profile />
           </Route>
        </div>
    );
}

export default Content; 