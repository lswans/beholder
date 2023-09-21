import React from 'react';

export default function Nav(props) {
    return (
        <div class='navbar'>
            <div class='nav-buttons' style={{marginLeft: 45}}><a href="/"><p>Home</p></a></div>
            <div class='nav-buttons'><a href="/Search"><p>Search</p></a></div>
            <div class='nav-buttons'><a href="/About"><p>About</p></a></div>
            </div>
        
    );
}