import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/views/Home"
import LandingPage from "./components/views/LandingPage";
import Detail from './components/views/Detail';
import Form from "./components/views/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/dog" component={Form} />
        <Route exact path="/dogs/:id" render={({match})=><Detail id={match.params.id}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
