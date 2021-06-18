import { Switch, Route } from "react-router-dom";
import routes from "./router";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    </>
  );
}

export default App;
