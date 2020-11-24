import './App.css';
// import SurveyOne from "./components/SurveyOne";
// import SurveyTwo from "./components/SurveyTwo";
import Title from './Title';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";


function App() {
  return (
    <div className="App">
    {/* Don't forget to include the history module */}
    <Title />


  </div>
  );
}

export default App;

/*
    <Router history={history}>
      <Switch>
        <Route path="/surveyone" component={SurveyOne} />
        <Route path="/surveytwo" component={SurveyTwo} />
      </Switch>
    </Router>*/


