
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Home from './pages/Home'
import Projects from './pages/Projects'
import PropertyDescription from './components/PropertyDescription'
function App() {


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
