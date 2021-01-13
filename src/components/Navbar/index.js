import React from 'react';
import {Nav, NavLogo, NavbarContainer} from  './NavbarEle';

const Navabr = () => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>
                       Yolo
                   </NavLogo>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navabr
