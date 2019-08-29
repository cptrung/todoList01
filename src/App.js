import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/index';


import './App.css';

class App extends Component {
   ShowContet = (routes) => {
      let result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return <Route
               key={index}
               path={route.path}
               exact={route.exact}
               component={route.main}
            />
         })
      }
      return <Switch>{result}</Switch>;;
   }

   render() {
      return ( 
         <Router>
            <div className="App">
               {/* <HomePage/> */}
               {this.ShowContet(routes)}
            </div>
         </Router>
            );
         }
      }
      
      export default App;
