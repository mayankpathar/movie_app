import React from 'react'
import Herosection from './Herosection'
import Latestmovies from './Latestmovies'
import Latestseries from './Latestseries'
import Latestanime from './Latestanime'
import Specialmovie from './Specialmovie'
import Pricingsection from './Pricingsection'

function Home() {
    return (
        <div>
            <Herosection />
            <Latestmovies />
            <Latestseries />
            <Latestanime />
            <Specialmovie />
            <Pricingsection />
        </div>
    )
}

export default Home
