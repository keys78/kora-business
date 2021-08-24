import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Pages";
import SignInPage from './Pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

