import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './Header'
import Movieslider from './Movieslider'
import MovieItems from './MovieItems'
import Trailers from './Trailers'
import LatestNew from './LatestNew'
import Footer from './Footer'

function App() {
  return(<>
 <Header/>
 <Movieslider/>
 <MovieItems/>
 <Trailers/>
 <LatestNew/>
 <Footer/>

  </>);
}

export default App
