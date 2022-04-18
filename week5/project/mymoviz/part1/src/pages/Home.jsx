import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    CardGroup,
    Container,
    Row,
  } from "reactstrap";
import Cards from '../components/Cards';
import Header from '../components/Header';
import '../styles/Home.css';

import starwars from "../images/starwars.jpg"
import maleficentImage from '../images/maleficent.jpg';
import jumanjiImage from '../images/jumanji.jpg'
import frozenImage from '../images/frozen.jpg'
import once_uponImage from '../images/once_upon.jpg'
import terminatorImage from '../images/terminator.jpg'

let moviesImages = [starwars, maleficentImage, jumanjiImage, once_uponImage, frozenImage, terminatorImage]
let moviesNames = [
    "Star Wars: l'Ascension de Skywalker",
    "Maléfique: Le pouvoir du mal",
    "Jumanji: The Next Level",
    "once upon time",
    "La reine des neiges 2",
    "Terminator: gene"
];
let moviesDescriptions = [
    "La conclusion de la saga skywalker.De nouvelles légendes vont naitre dans cette...",
    "Maléfique est une belle jeune femme au coeur pur qui mène une vie idyllique au sein d'une paisible forêt dans un royaume où règnent le bonheur et l'harmonie. Un jour, une armée d'envahisseurs menace les frontières du pays et Maléfique, n'écoutant que son courage, s'élève en féroce protectrice de cette terre.",
    "Lors d'une partie de Jumanji, un jeu très ancien, le jeune Alan est propulsé sous les yeux de son amie d'enfance, Sarah, dans un étrange pays. Il ne pourra s'en échapper que lorsqu'un autre joueur reprendra la partie et le libèrera sur un coup de dés.",
    "Au Pays des Contes, la Méchante Reine fait irruption au mariage de Blanche-Neige et du prince Charmant et annonce qu'elle lancera une malédiction sur leur monde qui privera chacun de sa fin heureuse. Inquiets, les jeunes mariés craignent pour leur enfant à venir.",
    "Elsa se demande pourquoi elle est née avec des pouvoirs magiques. La réponse menace son royaume. Avec Anna, Kristoff, Olaf et Sven, elle entreprendra un voyage dangereux, mais remarquable où elle ne pourra que souhaiter que ses pouvoirs soient assez puissants.",
    "Un Terminator, robot d'aspect humain, est envoyé d'un futur où sa race livre aux hommes une guerre sans merci. Sa mission est de trouver et d'éliminer Sarah Connor avant qu'elle ne donne naissance à John, appelé à devenir le chef de la résistance. Cette dernière envoie un de ses membres, Reese, aux trousses du cyborg.",
];
let moviesCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let moviesList = [];
for(let i=0; i<6; i++){
    moviesList.push(<Cards mouviesImages={moviesImages[i]} moviesNames={moviesNames[i]} moviesDescriptions={moviesDescriptions[i]} moviesViews={moviesCounter[i]} moviesMin={moviesCounter[i]} moviesPlus={moviesCounter[i]} />);
};

const Home = () => {
    return (
        <div className='content'>
            <Container>
                <CardGroup>
                    <Header />
                    <Row xs="1" lg="2" xl="3">
                        {moviesList}
                    </Row>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Home;