import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import DataDisplayer from "./features/data/dataDisplayer"

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          render={() => (
            <>
              
            </>
          )}
        />
        <Route exact path="/data" component={DataDisplayer} />
      </Switch>
    </Router>
 );
}

export default App;
