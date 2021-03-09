import { Route , Switch } from 'react-router-dom'
import Contact from './components/main/Contact'
import Portfolio from './components/main/Portfolio'
import Home from './components/main/Home'
import './App.css';

function App() {
  return (
    
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
      </Switch>
    
  
  );
}

export default App;
