import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a class="navbar-brand" href="#"><span className="navLogo">AirCnc</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav" >
                            <li class="nav-item">
                                <a class="nav-link" href="#">Host Your Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Host Your Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Help</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" className="nav-signup">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;