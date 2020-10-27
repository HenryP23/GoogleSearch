import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './components/Search';
import Saved from './components/Saved';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="Container">

    <Navbar />
        <Switch>
          <Route path = "/" component={Search} exact />
          <Route path = "/saved" component={Saved} exact />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
