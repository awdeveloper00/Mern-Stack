import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './Pages/signupPage';
import loginPage from './Pages/loginPage';
import HomePage from './Pages/HomePage';
function App() {
 
  return (
    <Router>
    <Switch>
    <Route path="/" component={HomePage} exact/>
    <Route path="/Login" component={loginPage} exact/>
    <Route path="/Signup" component={SignUp} exact/>
    </Switch>
    </Router>       
  );
}

export default App;
