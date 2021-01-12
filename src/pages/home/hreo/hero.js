import React from 'react'
import './hero.css';
import logo from '../../../assetes/svg/detailed_analysis.svg';

 const Hero = () => {
    return (
        <>
        <div className="hero">
        
            <div className="item1">
            
                    <h1>welcome </h1>
                    <p>To taiz university journal</p>
                    <p>Industrial Engineering Journal invites original contributions from the researchers, academicians, industrial practitioners, students, etc in the form of “State of the Art” papers and “Case Studies” on the inter-disciplinary aspects of Industrial Engineering and Management Science in Manufacturing Service organisations in Private and Government sector .</p>

                    <div className="btnc">
                        <button className="btn1">Submite</button>
                        <button className="btn2">Singin</button>
                    </div>

            </div>
            
            <div className="item2">
            <img className="img" src={logo} alt="data"/>
            </div>

        </div>

       
        </>
    )
}
export default Hero;