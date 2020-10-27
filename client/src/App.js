import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './components/Search';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="Container">

    <Navbar />
        <Switch>
          <Route path = "/" component={Search} exact />
          <Route path = "/home" component={Search} exact />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
