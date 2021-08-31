import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import Navbar  from './Navbar';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
    
    <Navbar />
    <Switch>
      <Route exact path = "/" component = {Home} />
    </Switch>
    <Footer/>

    </BrowserRouter>
  );
}

export default App