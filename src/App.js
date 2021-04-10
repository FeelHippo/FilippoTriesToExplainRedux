import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*--- import containers ---*/
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import NewsDetail from './containers/NewsDetail';

/*--- fixed navbar, body has 2 routes ---*/
const App = () => (
  <>
    <Router>
      <div>
      <Navbar />
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={'/detail/:id'} component={NewsDetail} />
        </Switch> */}
      </div>
    </Router>
  </>
)

export default App;
