import React from 'react'
import './header.css'
import { BrowserRouter , Route , Link } from 'react-router-dom';
import hi from '../hi';
import Bye from '../bye';
import logo from '../../src/T.svg'

 const Header = () => {
    return (
        <BrowserRouter>
        
        <div className="nav">

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titel">Taiz university<br/> journal</h1>

                <ul>

                  <li> <Link to="/">Home</Link></li>
                 
                  <li class="dropdown">
                      <a href="javascript:void(0)" class="dropbtn">Editorial</a>
                        <div class="dropdown-content">
                            <a href="#">Editorial Board</a>
                            <a href="#">Management Team</a>
                        </div>
                    </li>

                   
                    <li> <Link to="/PaperSubmission">Contact Us</Link> </li>
                    <li style={{float:"right"}}> <Link to="/PaperSubmission">singIn</Link> </li>
                    <li style={{float:"right"}}> <Link to="/PaperSubmission">Register</Link> </li>
                    <li style={{float:"right" , paddingRight: "150px" , marginTop:"110px"}}> 
                    <input style={{backgroundColor:"transparent", border: "none" , color:"white", height:"2rem" }}  placeholder="Search"/> 
                    </li>

                </ul>
               

                </div>

            <Route path="/" component={hi}/>
            <Route path="/Editorial" component={Bye}/>
      
        </BrowserRouter>
    )
}
export default Header;
