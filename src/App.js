 
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Top from './containers/Top/Top';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/top" exact component={Top}/>

        </Switch>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
