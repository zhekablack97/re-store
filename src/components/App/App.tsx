import React from "react";
import { Switch, Route } from "react-router-dom";
import { CardPage, HomePage } from "../pages";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/card" component={CardPage} exact />
    </Switch>
  );
};

export default App;
