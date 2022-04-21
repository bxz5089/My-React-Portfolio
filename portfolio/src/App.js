import './App.css';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Container from "react-bootstrap/Container";
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <HomePage />
      <AboutMePage />
      <Footer />
    </div>

    // <Container fluid className="portfolio-app">
    //   <Router basename='/'>
    //     <Header />
    //     <Switch>
    //       <Route exact path="/" component={HomePage} />
    //       <Route exact path="/aboutme" component={AboutMePage} />
    //       <Route exact path="/contact" component={Contact} />
    //     </Switch>
    //     <Footer />
    //   </Router>
    // </Container>
  );
}

export default App;