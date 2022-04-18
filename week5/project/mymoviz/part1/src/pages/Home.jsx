import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    CardGroup,
    Container,
    Row,
  } from "reactstrap";
import Cards from '../components/Cards';
import Header from '../components/Header';

import starwars from "../images/starwars.jpg"
import maleficentImage from '../images/maleficent.jpg';
import jumanjiImage from '../images/jumanji.jpg'
import frozenImage from '../images/frozen.jpg'
import once_uponImage from '../images/once_upon.jpg'
import terminatorImage from '../images/terminator.jpg'

let moviesImages = [starwars, maleficentImage, jumanjiImage, frozenImage, once_uponImage, terminatorImage]
let moviesList = [];
for(let i=0; i<6; i++){
    moviesList.push(<Cards mouviesImages={moviesImages[i]} />);
};

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <CardGroup>
                    <Row xs="1" lg="2" xl="3">
                        {moviesList}
                    </Row>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Home;