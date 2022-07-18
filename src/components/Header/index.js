import React from 'react';
import Nav from '../Nav';

function Header(props){
    return(
        <header>
            <Nav setCurrentPage = {props.setCurrentPage}> </Nav>

        </header>
    );
}

export default Header; 