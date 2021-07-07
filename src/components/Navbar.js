import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../logo.jpg'
import {Button} from 'react-bootstrap';


function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className='search'>
   <input type="text" placeholder="Search.." className='ip-search'/>
   <button type="submit" className='btn-grad'>+</button>

          </div>

        </div>
      </IconContext.Provider>


      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <h5 className='logo'><img className='logoimg' src={Logo}/>asana</h5>
              <Link to='#' className='second-menu-bars'>
              <FaIcons.FaAngleLeft />
                <FaIcons.FaBars  />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
