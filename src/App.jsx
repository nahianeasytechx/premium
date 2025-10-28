
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Home from './pages/Home'
function App() {


  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
</Routes>
<Footer/>
    </>
  )
}

export default App
