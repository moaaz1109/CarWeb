
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home";




const App = () => {
  return (
    <Router>
   
     <main>
       <Switch>
         <Route path="/" exact>
           <Home />
         </Route>
         
        
        
         <Redirect to="/" />
       </Switch>
     </main>

    </Router>
   );
 }

export default App;






