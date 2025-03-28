// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
// import { About } from './Component/About';
import Contact from './Component/Contact';
import Experiance from './Component/Experiance';
import Home from './Component/Home';
import Intern from './Component/Intern';
import Nav from './Component/Nav';
import Projects from './Component/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Experiance/>
      <Intern/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
