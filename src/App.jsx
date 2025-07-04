import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles/globals.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="portfolio-app">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;    