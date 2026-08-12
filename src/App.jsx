import Header from './Header'
import Footer from './Footer'
import Movies from './movies'
import Series from './Series'
import Animes from './Animes'
import Downloads from './Downloads'
import Toprated from './Toprated'
import My_list from './My_list'
import Sign from './Sign'
import Home from './Home'
import { Routes, Route, Navigate } from 'react-router-dom'

// Movie detail pages
import BlackPantherdetail from './BlackPantherdetail'
import Bloodshotdetail from './Bloodshotdetail'
import Calldetail from './Calldetail'
import CaptainMarveldetail from './CaptainMarveldetail'
import Cocodetail from './Cocodetail'
import Croodsdetail from './Croodsdetail'
import DemonSlayerdetail from './DemonSlayerdetail'
import Dragonballdetail from './Dragonballdetail'
import GOTGVol3detail from './GOTGVol3detail'
import HunterKillerdetail from './HunterKillerdetail'
import JohnWickdetail from './JohnWickdetail'
import Mandaloriandetail from './Mandaloriandetail'
import OverTheMoondetail from './OverTheMoondetail'
import Penthousesdetail from './Penthousesdetail'
import ResidentEvildetail from './ResidentEvildetail'
import StarTrekdetail from './StarTrekdetail'
import StrangerThingsdetail from './StrangerThingsdetail'
import Supergirldetail from './Supergirldetail'
import TheFalconAndTheWinterSoldierdetail from './TheFalconAndTheWinterSoldierdetail'
import Theatreofthedeaddetail from './Theatreofthedeaddetail'
import Transformerdetail from './Transformerdetail'
import WandaVision from './WandaVision'
import WeatheringWithYoudetail from './WeatheringWithYoudetail'
import YourNamedetail from './YourNamedetail'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/animes" element={<Animes/>} />
        <Route path="/downloads" element={<Downloads/>} />
        <Route path="/toprated" element={<Toprated/>} />
        <Route path="/my-list" element={<My_list/>} />
        <Route path="/sign" element={<Sign/>} />

        {/* Movie detail pages */}
        <Route path="/movie/black-panther" element={<BlackPantherdetail/>} />
        <Route path="/movie/bloodshot" element={<Bloodshotdetail/>} />
        <Route path="/movie/call" element={<Calldetail/>} />
        <Route path="/movie/captain-marvel" element={<CaptainMarveldetail/>} />
        <Route path="/movie/coco" element={<Cocodetail/>} />
        <Route path="/movie/croods" element={<Croodsdetail/>} />
        <Route path="/movie/demon-slayer" element={<DemonSlayerdetail/>} />
        <Route path="/movie/dragonball" element={<Dragonballdetail/>} />
        <Route path="/movie/gotg-vol3" element={<GOTGVol3detail/>} />
        <Route path="/movie/hunter-killer" element={<HunterKillerdetail/>} />
        <Route path="/movie/john-wick" element={<JohnWickdetail/>} />
        <Route path="/movie/mandalorian" element={<Mandaloriandetail/>} />
        <Route path="/movie/over-the-moon" element={<OverTheMoondetail/>} />
        <Route path="/movie/penthouses" element={<Penthousesdetail/>} />
        <Route path="/movie/resident-evil" element={<ResidentEvildetail/>} />
        <Route path="/movie/star-trek" element={<StarTrekdetail/>} />
        <Route path="/movie/stranger-things" element={<StrangerThingsdetail/>} />
        <Route path="/movie/supergirl" element={<Supergirldetail/>} />
        <Route path="/movie/the-falcon-and-the-winter-soldier" element={<TheFalconAndTheWinterSoldierdetail/>} />
        <Route path="/movie/theatre-of-the-dead" element={<Theatreofthedeaddetail/>} />
        <Route path="/movie/transformer" element={<Transformerdetail/>} />
        <Route path="/movie/wanda-vision" element={<WandaVision/>} />
        <Route path="/movie/weathering-with-you" element={<WeatheringWithYoudetail/>} />
        <Route path="/movie/your-name" element={<YourNamedetail/>} />

  
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
