import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Container, Row } from "reactstrap";
import Cards from "../components/Cards";
import Header from "../components/Header";
import "../styles/Home.css";

import starwars from "../images/starwars.jpg";
import maleficentImage from "../images/maleficent.jpg";
import jumanjiImage from "../images/jumanji.jpg";
import frozenImage from "../images/frozen.jpg";
import once_uponImage from "../images/once_upon.jpg";
import terminatorImage from "../images/terminator.jpg";
import badBoysImage from "../images/badboy3.jpg";


const Home = () => {
    const movieData = [
      {
        name: "Star Wars: l'Ascension de Skywalker",
        desc: "La conclusion de la saga skywalker.De nouvelles légendes vont naitre dans cette...",
        img: starwars,
        note: 4.8,
        vote: 5,
      },
      {
        name: "Maléfique: Le pouvoir du mal",
        desc: "Maléfique est une belle jeune femme au coeur pur qui mène une vie idyllique au sein d'une paisible forêt dans un royaume où règnent le bonheur et l'harmonie. Un jour, une armée d'envahisseurs menace les frontières du pays et Maléfique, n'écoutant que son courage, s'élève en féroce protectrice de cette terre.",
        img: maleficentImage,
        note: 6.7,
        vote: 3,
      },
      {
        name: "Jumanji: The Next Level",
        desc: "Lors d'une partie de Jumanji, un jeu très ancien, le jeune Alan est propulsé sous les yeux de son amie d'enfance, Sarah, dans un étrange pays. Il ne pourra s'en échapper que lorsqu'un autre joueur reprendra la partie et le libèrera sur un coup de dés.",
        img: jumanjiImage,
        note: 8.2,
        vote: 8,
      },
      {
        name: "once upon time",
        desc: "Au Pays des Contes, la Méchante Reine fait irruption au mariage de Blanche-Neige et du prince Charmant et annonce qu'elle lancera une malédiction sur leur monde qui privera chacun de sa fin heureuse. Inquiets, les jeunes mariés craignent pour leur enfant à venir.",
        img: frozenImage,
        note: 4.5,
        vote: 2,
      },
      {
        name: "La reine des neiges 2",
        desc: "Elsa se demande pourquoi elle est née avec des pouvoirs magiques. La réponse menace son royaume. Avec Anna, Kristoff, Olaf et Sven, elle entreprendra un voyage dangereux, mais remarquable où elle ne pourra que souhaiter que ses pouvoirs soient assez puissants.",
        img: once_uponImage,
        note: 9.2,
        vote: 9,
      },
      {
        name: "Terminator: gene",
        desc: "Un Terminator, robot d'aspect humain, est envoyé d'un futur où sa race livre aux hommes une guerre sans merci. Sa mission est de trouver et d'éliminer Sarah Connor avant qu'elle ne donne naissance à John, appelé à devenir le chef de la résistance. Cette dernière envoie un de ses membres, Reese, aux trousses du cyborg.",
        img: terminatorImage,
        note: 4.7,
        vote: 12,
      },
      {
        name: "Bad Boys 2",
        desc: "bad boys 2 film trop trtop trop cool",
        img: badBoysImage,
        note: 6.8,
        vote: 12,
      },
    ];
    
    let [moviesCount, setMoviesCount] = useState(0);
    let [wishlistFilm, setWishlistFilm] = useState([]);
    let handleClickAddMovie = (name, image) => {
        setMoviesCount(moviesCount +1);
        setWishlistFilm( [...wishlistFilm, {name: name, img: image} ] )
    }
    let handleClickRemoveMovie = (name) => {
        setMoviesCount(moviesCount -1)
        setWishlistFilm( wishlistFilm.filter((e) => (e.name !== name)) )
    }
    
    let moviesList = [];
    for (let i = 0; i < movieData.length; i++) {
      moviesList.push(
        <Cards
          mouviesImages={movieData[i].img}
          moviesNames={movieData[i].name}
          moviesDescriptions={movieData[i].desc}
          moviesNote={movieData[i].note}
          moviesVote={movieData[i].vote}
          handleClickAddMovieParent={handleClickAddMovie}
          handleClickRemoveMovieParent={handleClickRemoveMovie}
          like={wishlistFilm.find((filmName) => filmName.name === movieData[i].name) ? true: false}
        />
      );
    };

  return (
    <div className="content">
      <Container>
        <CardGroup>
          <Header counter={moviesCount} wishlistFilm={wishlistFilm} handleClickRemoveMovieParent={handleClickRemoveMovie}/>
          <Row xs="1" lg="2" xl="3">
            {moviesList}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Home;
