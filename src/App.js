import './App.css';
import { HashRouter as Router,Switch,Route } from 'react-router-dom';
import Angles from './components/Angles';
import Home from './components/Home';
import Area from './components/Area';
import Hypotenuse from './components/Hypotenuse';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      
      <Router >    
                   
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/angles'>
          <Angles />
        </Route>
        <Route path="/area">
          <Area />
        </Route>
        <Route exact path='/hypotenuse'>
          <Hypotenuse />
        </Route>
        <Route exact path='/quiz'>
          <Quiz />
        </Route>
        <Route>
          Not found
        </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
