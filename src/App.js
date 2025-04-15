import { useEffect, useState } from 'react';

import './App.scss';

import text from './config/text.js';

import Navigation from './components/navigation.component';
import Header from './components/header.component';
import About from './components/about.component';
import Resume from './components/resume.component';
import Works from './components/works.component';
import Footer from './components/footer.component';
import DynamicBg from './components/dynamicbg.component';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loaded, setLoaded]                 = useState(0);
  const [height, setHeight]                 = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    setHeight(winScroll / height);
  };

  useEffect(() => {
    setTimeout(setLoaded(1), 3000);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll, {passive: true});
    };
  }, []);

  return (
    <div className = "App">
      <Navigation       text        = {text} 
                        offset      = {scrollPosition}
                        height      = {height}
                        loaded      = {loaded} />
      <Header           text        = {text}
                        loaded      = {loaded} />
      <About            text        = {text}
                        offset      = {scrollPosition} />
      <Works            text        = {text} />
      <Resume           text        = {text}
                        loaded      = {loaded} />
      <Footer           text        = {text} 
                        loaded      = {loaded} />
      <DynamicBg        offset      = {scrollPosition}
                        loaded      = {loaded} />
    </div>
  );
}

export default App;
