import React from 'react';
import './navbar.scss';

const NavbarView = ({  
    currentUserValue,               // NOTE: props are destructured
    updateUserValue,
    fetchUserNews
}) => (                             // note the () parenthesis
    <div className="navbar-container">
        <div className="navbar-container__inputs">
            <input
                type="text"
                id="userInput"
                name="navbarInput"
                className={ currentUserValue ? 'active' : '' }
                onChange={ updateUserValue }
            />
            <button onClick={ fetchUserNews } > Search </button>
        </div>
    </div>
)

export default NavbarView;