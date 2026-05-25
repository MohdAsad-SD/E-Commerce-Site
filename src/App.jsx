import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import AllCollections from './Components/Pages/AllCollections'




function App() {
  const [search,setsearch]=useState(false);

  return (
    <>
      <Navbar search={search} setsearch={setsearch}/>
      {search && <Search search={search} setsearch={setsearch}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allcollections' element={<AllCollections/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
