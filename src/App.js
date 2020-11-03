import {  Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';

import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Project2 from './pages/Projects/Project2/Project2';
import Project3 from './pages/Projects/Project3/Project3';
import Project4 from './pages/Projects/Project4/Project4';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      
      <Header />

      <div>
       
        <Switch>

          <Route exact path="/" render={() => (
            <Main />
          )} />
            
          <Route exact path="/AboutMe" render={() => (
            <AboutMe />
          )} />

          <Route exact path="/Projects" render={() => (
            <Projects /> 
          )} />

          <Route exact path="/Project2" render={() => (
            <Project2 />
          )} />

          <Route exact path="/Project3" render={() => (
            <Project3 />
          )} />

          <Route exact path="/Project4" render={() => (
            <Project4 />
          )} />

          <Route exact path="/Contact" render={() => (
            <Contact />
          )} />

          </Switch>
      
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
