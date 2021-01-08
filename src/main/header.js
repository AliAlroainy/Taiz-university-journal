import React from 'react'
import './header.css'
import { BrowserRouter , Route , Link } from 'react-router-dom';
import hi from '../hi';
import Bye from '../bye';
 const Header = () => {
    return (
        <BrowserRouter>
        
            <div class="navbar">
            <Link to="/">Home</Link>
            <Link to="/Editorial">Editorial</Link>
            <Link to="/Archive">Archive</Link>
            <Link to="/Author">Author's Guideline</Link>
            <Link to="/Paper">Paper Submission</Link>
            </div>
            
            <Route path="/Editorial" component={Bye}/>
      
        </BrowserRouter>
    )
}
export default Header;
