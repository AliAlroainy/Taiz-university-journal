import React from 'react'
import './home.css';
import Hero from './hreo/hero';
import Latest from './latestpapers/latest';
import Other from './other';

const Home = () => {
    return (
        <div className="home">
            <Hero/>
            <hr/>
            <Latest/>
            <Other/>
            
        </div>
        
    )
}

export default Home ;
