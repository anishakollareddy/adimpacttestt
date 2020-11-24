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
    <Router history={history}>
      <Switch>
      </Switch>
    </Router>


  </div>
  );
}

export default App;

/*
"axios": "^0.19.2",
    "survey-react": "^1.8.13",
    "react-router-dom": "^5.2.0"
    <Route path="/surveytwo" component={SurveyTwo} />

    */
