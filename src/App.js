import logo from './logo.svg';
import './App.css';
import surveyone from "./components/surveyone";
import surveytwo from "./components/surveytwo";
import Title from './Title';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";


function App() {
  return (
    <div className="App">
    {/* Don't forget to include the history module */}
    <Title />

    <Router history={history}>
      <Switch>
        <Route path="/surveyone" component={surveyone} />
        <Route path="/surveytwo" component={surveyone} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;


