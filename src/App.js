import { React, useState } from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About/>
        } else if (currentPage === 'Portfolio') {
            return <Portfolio/>
        } else if (currentPage === 'Skills') {
            return <Skills/>
        } else if (currentPage === 'Contact') {
            return <Contact/>
        }
    };

    return (
            <div>
                <Navigation setCurrentPage={setCurrentPage}/>
                {renderPage()}
                <Footer/>
            </div>
    )
  }
  
  export default App;