import React from 'react';
import {Route, 
  BrowserRouter as Router,
  Switch} from 'react-router-dom';
import {DashboardAll} from './Pages/DashboardAll';
import {DashboardSocial} from './Pages/DashboardSocial';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={DashboardAll}/>
      <Route path="/SocialInnovation" exact component={DashboardSocial}/>
      </Switch>
    </Router>    
  );
}

export default App;
