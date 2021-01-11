import React from 'react'
import './header.css'
import { BrowserRouter , Route , Link } from 'react-router-dom';

import logo from '../../T.svg'

 const Header = () => {
    return (
        <BrowserRouter>
        
        <div className="Topheadr">

            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a> 
            <a href="#" className="titel" >TAIZ UNIVERSITY JOURNAL </a> 

            <a href="#" style={{float:"right"}}> Login    </a>
            <a style={{float:"right"}}>|</a>
            <a href="#" style={{float:"right"}}> Register </a>
                                                       

        </div>
     

        </BrowserRouter>
    )
}
export default Header;
