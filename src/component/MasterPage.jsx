import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './MasterPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './HeaderNavigation';
import Content from './Content';


const MasterPage =()=> {
    return(
        <Router>
            <div>
                <Navigation/>
                <div className="container-fluid">
                    <div className="row">               
                        <Content/>
                    </div>           
                </div>
            </div>
        </Router>
    );
}

export default MasterPage;