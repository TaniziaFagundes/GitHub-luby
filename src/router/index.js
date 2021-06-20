import { Route, Switch } from "react-router";
import Login from "../pages/Login";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
