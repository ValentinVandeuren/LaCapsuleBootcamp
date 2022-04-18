import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavItem, Button } from 'reactstrap';

const Header = () => {
    return (
        <div className='header'>
            <Nav>
                <NavItem>
                    <img src={logo} alt='logo mymoviz' />
                </NavItem>
                <NavItem>
                    <h4>Last Releases</h4>
                </NavItem>
                <NavItem>
                    <Button>11 films</Button>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Header;