import React , {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {
    HOME_ROUTE ,
    ABOUT_JOURNAL_ROUTE,
    EDITORIAL_ROUTE ,
    PRIVACY_STATEMENT_ROUTE,
    INSTITUTIONAL_PARTNERSHIPS,
    SUBMISSION_ROUTE,
    RESEARCH_ROUTE,
    CONTACT_US_ROUTE
} from '../../routes' ;
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
                    <NavLink to={CONTACT_US_ROUTE} >Contact us</NavLink>
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
                        <li className='active'><NavLink to={HOME_ROUTE}>Home</NavLink></li>
                        <li className ='' onClick={handleClick}>
                            <NavLink to ='/'>Journay Information </NavLink>
                            <FontAwesomeIcon className = 'icon' icon={["fas" , "angle-down"]} />
                            {
                                expand &&
                                <nav className='sub-menu-bar'>
                                    <ul >
                                        <li><NavLink to={ABOUT_JOURNAL_ROUTE}>About Journal</NavLink></li>
                                        <li><NavLink to={EDITORIAL_ROUTE}>Editorial Team</NavLink></li>
                                        <li><NavLink to={PRIVACY_STATEMENT_ROUTE}>Privacy Statement</NavLink></li>
                                        <li><NavLink to={INSTITUTIONAL_PARTNERSHIPS}>Institutional partnerships</NavLink></li>
                                    </ul>
                                </nav>
                            }
                        </li>
                        <li><NavLink to={SUBMISSION_ROUTE}>Submission</NavLink></li>
                        <li><NavLink to={RESEARCH_ROUTE}>Research</NavLink></li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}
