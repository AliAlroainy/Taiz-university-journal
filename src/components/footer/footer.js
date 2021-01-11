import React from 'react'
import './footer.css'
import Logo from '../../assets/images/footer.svg'

const footer = () => {
    return (
        <div className="footer">

            <div>
            <img src={Logo} alt="logo" style={{height:"10rem"}} />

            </div>
           
            <div>
             <a href="#">information </a> 
             <a href="#">about us  </a>
             <a href="#">something else</a>

            </div>
             
           

            <div >
            <a href="#">information </a> 
             <a href="#">about us  </a>
             <a href="#">something else</a>
            </div>
            
            <div className="box">

            <input placeholder="search" style={{ borderColor: " #fff " , borderRadius: "1rem" , height:"1.5rem" , width :"20rem" , backgroundColor :"transparent" , justifyContent:"center"}}/>
            <p>contact</p>

            <div className="sc" >
            <a href="#">Facebook </a> 
            <a href="#">Twitter  </a>
            <a href="#">Linkedin</a>
            </div>

            </div>

        </div>
    )
}

export default footer;