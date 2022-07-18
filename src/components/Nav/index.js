import React from 'react';

function Nav(props){
    return(
        <nav>
            <ul>
                <li>
                    <a onClick={ props.setCurrentPage("About")} href={()=> false}> About </a>
                </li>
                <li>
                    <a onClick={props.setCurrentPage('Contact')} href={()=> false}> Contact </a>
                </li>
                <li>
                    <a onClick={props.setCurrentPage('Projects')} href={()=> false}> Projects </a>
                </li> 
            </ul>
        </nav>
    );
}

export default Nav;