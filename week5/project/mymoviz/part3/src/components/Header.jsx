import React, { useState } from "react";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavItem,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import "../styles/Home.css";

const Header = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  let handleButtonCLick = () => {
    if (isOpen === false) {
      setIsOpen((isOpen = true));
    } else {
      setIsOpen((isOpen = false));
    }
  };

  let handleCardClick = (name) => {
    props.handleClickRemoveMovieParent(name)
  }

   const movieCard = props.wishlistFilm.map((movie) => {
     return (
       <PopoverBody onClick={ () => handleCardClick(movie.name) } style={{cursor: "pointer"}} > <img src={movie.img} alt="imageC" className="imageDropDown" /> {movie.name} </PopoverBody>
     )
   })

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
          <Button id="dropDownButton" onClick={ () => handleButtonCLick() }>{props.counter} films</Button>
          <Popover 
            flip
            placement="bottom"
            target="dropDownButton"
            isOpen={isOpen}
          >
            <PopoverHeader>Wishlist</PopoverHeader>
            {movieCard}
          </Popover>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Header;
