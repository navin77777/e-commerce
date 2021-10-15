import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../src/pages/homepage.component";

const HatPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
