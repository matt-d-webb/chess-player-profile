import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./Profile";

import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Profile} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
