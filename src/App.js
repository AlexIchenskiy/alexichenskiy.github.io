import { useState, useEffect } from 'react';

import './App.scss';

import text from './config/text.js';

import MobileNavigation from './components/mobilenavigation.component';
import Navigation from './components/navigation.component';
import Header from './components/header.component';
import About from './components/about.component';
import Resume from './components/resume.component';
import Works from './components/works.component';
import Footer from './components/footer.component';
import Modal from './components/modal.component';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalOpened, setModalOpened]       = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleOpen = () => {
    setModalOpened(!modalOpened);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll, {passive: true});
    };
  }, []);

  return (
    <div className = "App">
      <MobileNavigation handleOpen  = {handleOpen} 
                        offset      = {scrollPosition}
                        modalOpened = {modalOpened} />
      <Modal            handleOpen  = {handleOpen}
                        text        = {text} 
                        modalOpened = {modalOpened}
                        offset      = {scrollPosition} />
      <Navigation       text        = {text} offset = {scrollPosition} />
      <Header           text        = {text} />
      <About            text        = {text} />
      <Resume           text        = {text} />
      <Works            text        = {text} />
      <Footer           text        = {text} />
    </div>
  );
}

export default App;
