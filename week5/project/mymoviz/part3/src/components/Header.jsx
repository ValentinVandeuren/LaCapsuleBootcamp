import React, { useState } from "react";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavItem,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../styles/Home.css";

const Header = (props) => {
    let [isOpen, setIsOpen] = useState(false);
    let handleButtonCLick = () => {
        if(isOpen === false){
            setIsOpen(isOpen = true);
        }else {
            setIsOpen(isOpen = false)
        }
    };

    let handleItemWishClick = () => {
      props.handleClickRemoveMovieParent()
    }

    let finalList = [];
    for(let i=0; i<props.wishlistFilm.length; i++){
      finalList.push(<DropdownItem header style={{cursor: 'pointer'}} onClick={ () => handleItemWishClick() }><img className="imageDropDown" src={props.wishlistFilmImg[i]} alt="imageFilme"/>{props.wishlistFilm[i]}</DropdownItem>)
    }

  return (
    <div className="header">
      <Nav>
        <NavItem>
          <img src={logo} alt="logo mymoviz" />
        </NavItem>
        <NavItem>
          <h4 className="title">Last Releases</h4>
        </NavItem>
        <NavItem>
          {/* <Button>{props.counter} onClick={ () => handleFilmsClick() } films</Button> */}
          <ButtonDropdown onClick={ () => handleButtonCLick() } isOpen={isOpen}>
            <DropdownToggle caret>{props.counter} films</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Wishlist</DropdownItem>
              <DropdownItem divider />
              {finalList}
            </DropdownMenu>
          </ButtonDropdown>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Header;
