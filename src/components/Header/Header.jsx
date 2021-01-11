import React , {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {} from '../../routes' ;
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Header() {
    const [expand , setExpand ] = useState(false);
    const [searchShrink , setSearchShrink ] = useState('10%');
    const handleStrashing = () => {
        if(searchShrink === '10%')
            setSearchShrink('40%')
        else 
            setSearchShrink('10%')
    }
    const handleClick = () => {
        setExpand(!expand)
    }
    return (
        <div className='navbar'>
            <div className='nav'>
                <div className='upper-view'>
                    <NavLink to='/' >Contact us</NavLink>
                    <ul className='socials'>
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    </ul>
                    <div className='search'>
                        <div className='search-filed' style={{width : searchShrink}}>
                            <button><FontAwesomeIcon className = 'icon' icon={["fas" , "search"]} /></button>
                            <input type='text'  onClick={handleStrashing}/>
                        </div>
                    </div>
                </div>
                <div className='buttom-view'>
                    <ul className='main-nav'>
                        <li className='active'><NavLink to='/'>Home</NavLink></li>
                        <li className ='' onClick={handleClick}>
                            <NavLink to ='/'>Journay Information </NavLink>
                            <FontAwesomeIcon className = 'icon' icon={["fas" , "angle-down"]} />
                            {
                                expand &&
                                <nav className='sub-menu-bar'>
                                    <ul >
                                        <li><NavLink to='/'>About Journal</NavLink></li>
                                        <li><NavLink to='/'>Editorial Team</NavLink></li>
                                        <li><NavLink to='/'>Privacy Statement</NavLink></li>
                                        <li><NavLink to='/'>Institutional partnerships</NavLink></li>
                                    </ul>
                                </nav>
                            }
                        </li>
                        <li><NavLink to='/'>Submission</NavLink></li>
                        <li><NavLink to='/'>Indexing</NavLink></li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}
