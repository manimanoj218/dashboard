import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RawCategory from "./Views/RawCategory";
import CustomizedCategory from "./Views/CustomizedCategory";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RawCategory} />
          <Route exact path="/customized" component={CustomizedCategory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
