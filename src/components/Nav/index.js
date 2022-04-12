import React from 'react';

function Nav(props){
    return(
        <nav>
            <ul>
                <li>
                    <a href={()=> false}> About </a>
                </li>
                <li>
                    <a href={()=> false}> Contact </a>
                </li>
                <li>
                    <a href={()=> false}> Projects </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;