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

import starwars from "../images/starwars.jpg";
import maleficentImage from '../images/maleficent.jpg';
import jumanjiImage from '../images/jumanji.jpg';
import frozenImage from '../images/frozen.jpg';
import once_uponImage from '../images/once_upon.jpg';
import terminatorImage from '../images/terminator.jpg';
import badBoysImage from '../images/badboy3.jpg'

const movieData = [
    {name: "Star Wars: l'Ascension de Skywalker", desc: "La conclusion de la saga skywalker.De nouvelles légendes vont naitre dans cette...", img: starwars, voteMin: 3, voteMax: 4, view: 2, note: 4.8},
    {name: "Maléfique: Le pouvoir du mal", desc: "Maléfique est une belle jeune femme au coeur pur qui mène une vie idyllique au sein d'une paisible forêt dans un royaume où règnent le bonheur et l'harmonie. Un jour, une armée d'envahisseurs menace les frontières du pays et Maléfique, n'écoutant que son courage, s'élève en féroce protectrice de cette terre.", img: maleficentImage, voteMin: 7, voteMax: 8, view: 4, note: 6.7},
    {name: "Jumanji: The Next Level", desc: "Lors d'une partie de Jumanji, un jeu très ancien, le jeune Alan est propulsé sous les yeux de son amie d'enfance, Sarah, dans un étrange pays. Il ne pourra s'en échapper que lorsqu'un autre joueur reprendra la partie et le libèrera sur un coup de dés.", img: jumanjiImage, voteMin: 2, voteMax: 1, view: 6, note: 8.2},
    {name: "once upon time", desc: "Au Pays des Contes, la Méchante Reine fait irruption au mariage de Blanche-Neige et du prince Charmant et annonce qu'elle lancera une malédiction sur leur monde qui privera chacun de sa fin heureuse. Inquiets, les jeunes mariés craignent pour leur enfant à venir.", img: frozenImage, voteMin: 3, voteMax: 8, view: 4, note: 4.5},
    {name: "La reine des neiges 2", desc: "Elsa se demande pourquoi elle est née avec des pouvoirs magiques. La réponse menace son royaume. Avec Anna, Kristoff, Olaf et Sven, elle entreprendra un voyage dangereux, mais remarquable où elle ne pourra que souhaiter que ses pouvoirs soient assez puissants.", img: once_uponImage, voteMin: 1, voteMax: 4, view: 8, note: 9.2},
    {name: "Terminator: gene", desc: "Un Terminator, robot d'aspect humain, est envoyé d'un futur où sa race livre aux hommes une guerre sans merci. Sa mission est de trouver et d'éliminer Sarah Connor avant qu'elle ne donne naissance à John, appelé à devenir le chef de la résistance. Cette dernière envoie un de ses membres, Reese, aux trousses du cyborg.", img: terminatorImage, voteMin: 1, voteMax: 6, view: 10, note: 4.7},
    {name: "Bad Boys 2", desc: "bad boys 2 film trop trtop trop cool", img: badBoysImage, voteMin: 8, voteMax: 9, view: 2, note: 6.8}
]
let moviesList = [];
for(let i=0; i<movieData.length; i++){
    moviesList.push(<Cards mouviesImages={movieData[i].img} moviesNames={movieData[i].name} moviesDescriptions={movieData[i].desc} moviesViews={movieData[i].view} moviesMin={movieData[i].voteMin} moviesPlus={movieData[i].voteMax} moviesVote={movieData[i].note} />);
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