import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import FormDisplay from "./Pages/FormDisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" name="Form Display" render={(props) => <FormDisplay {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
