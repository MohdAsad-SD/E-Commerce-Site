import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Hero from './Components/Hero/Hero'
import Collections from './Components/Collections/Collections'
import BestSeller from './Components/BestSellers/BestSellers'



function App() {
  const [search,setsearch]=useState(false);

  return (
    <>
      <Navbar search={search} setsearch={setsearch}/>
      {search && <Search search={search} setsearch={setsearch}/>}
      <Hero/>
      <Collections/>
      <BestSeller/>
      
    </>
  )
}

export default App
