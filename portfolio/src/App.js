import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';



function App() {
  return (
    <Container fluid className="portfolio-app">
      <Router basename='/'>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/aboutmepage" element={<AboutMePage/>} />
          <Route exact path="/projects" element={<ProjectsPage/>} />
          <Route exact path="/resume" element={<ResumePage/>} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App; 

