import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Email from './emailVerification';
import Sms from './sms';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
         <Route exact path = "/email">
           <Email/>
         </Route>
         <Route exact path = "/sms">
           <Sms/>
         </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
