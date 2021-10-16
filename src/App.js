import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch } from 'react-router-dom';

// COMPONENTS
import { Home } from './components/pages/Home';
import { Navbar } from './components/layouts/Navbar';
import { Footer } from './components/layouts/Footer';
import { Services } from './components/pages/Services';
import { List } from './components/pages/List';
import { Portfolio } from './components/pages/Portfolio';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service/List/:id" children={<List />} />
      </Switch>
      <Footer />
    </>
  );
}


export default App;
