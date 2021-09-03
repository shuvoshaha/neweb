import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './Pages/Home';
import Footer from './components/Footer'
import Sign from './Pages/Sign';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign" exact component={Sign} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
