
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Home from './pages/Home'
import Projects from './pages/Projects'
import PropertyDescription from './components/PropertyDescription'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
function App() {
 useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
<Route path='/projects' element={  <Projects/>}/>
 <Route path="/property/:id" element={<PropertyDescription />} />
 <Route path="/verona" element={<PropertyDescription />} />
</Routes>
<Footer/>
    </>
  )
}

export default App
