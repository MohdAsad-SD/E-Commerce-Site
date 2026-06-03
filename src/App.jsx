import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import AllCollections from './Components/Pages/AllCollections'
import Login from './Components/Pages/Login'




function App() {
  const [search,setsearch]=useState(false);
  const [searchtext,setsearchtext]=useState("");
  const [login,setlogin]=useState(false);

  return (
    <>
      <Navbar login={login} setlogin={setlogin} search={search} setsearch={setsearch}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allcollections' element={<AllCollections searchtext={searchtext} setsearchtext={setsearchtext} search={search} setsearch={setsearch}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login login={login} setlogin={setlogin}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
