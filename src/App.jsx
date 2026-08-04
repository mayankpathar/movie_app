import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './Header'
import Herosection from './Herosection'
import Latestmovies from './Latestmovies'
import Latestseries from './Latestseries'
import Latestanime from './Latestanime'
import Specialmovie from './Specialmovie'
import Pricingsection from './Pricingsection'
import Footer from './Footer'
import Singp from './Singp'

function App() {
  return(<>
 <Header/>
 <Herosection/>
 <Latestmovies/>
 <Latestseries/>
 <Latestanime/>
 <Specialmovie/>
 <Pricingsection/>
 <Footer/>
 

  </>);
}

export default App
