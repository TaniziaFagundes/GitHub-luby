import { Route, Switch } from "react-router";
import Login from "../pages/Login";
import Repos from "../pages/Repos";
import Seguidores from "../pages/Seguidores";
import Seguindo from "../pages/Seguindo";
import Home from "../pages/Home";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/repos">
        <Repos />
      </Route>
      <Route exact path="/seguidores">
        <Seguidores />
      </Route>
      <Route exact path="/seguindo">
        <Seguindo />
      </Route>
    </Switch>
  );
};

export default Routes;
