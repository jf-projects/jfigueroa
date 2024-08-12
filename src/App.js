import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SideMenu from './components/SideMenu';
import Timeline from './components/Timeline';
import { AlertProvider } from './components/AlertContext';

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8/12">
          <AlertProvider>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Timeline />
            <Projects />
            <SideMenu />
            <Footer />
          </AlertProvider>
        </div>
      </div>
    </div >
  );
}

export default App;
