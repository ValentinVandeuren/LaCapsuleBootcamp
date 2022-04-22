import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Container, Row } from "reactstrap";
import Cards from "../components/Cards";
import Header from "../components/Header";
import "../styles/Home.css";


const Home = () => {
    
    let [movieData, setMovieData] = useState([])
    let [wishlistFilm, setWishlistFilm] = useState([]);

    useEffect(() => {
      async function loadData() {
        var rawResponse = await fetch('/wishlist-movie');
        var response = await rawResponse.json();

        // let wishlist = await fetch('/wishlist');
        // let responseWishlist = await wishlist.json();

        // let wishlistFromDB = responseWishlist.movieList.map((movie, i) => {
        //   return {name: movie.name, img: movie.img}
        // })

        // setWishlistFilm(wishlistFromDB)
        setMovieData(response.movieList)
      }
      loadData();
    }, []);

    let [moviesCount, setMoviesCount] = useState(0);
    let handleClickAddMovie = async (name, image) => {
        setMoviesCount(moviesCount +1);
        setWishlistFilm( [...wishlistFilm, {name: name, img: image} ] )
        await fetch('/add-movie', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `name=${name}&img=${image}`
        });
    }
    let handleClickRemoveMovie = async (name) => {
        setMoviesCount(moviesCount -1)
        setWishlistFilm( wishlistFilm.filter((e) => (e.name !== name)) )
        await fetch('/remove-movie', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `name=${name}`
        });
    }
    
    let moviesList = [];
    for (let i = 0; i < movieData.length; i++) {
      let shortDesc = movieData[i].desc;
      
      if(shortDesc.length>80){
        shortDesc = shortDesc.slice(0, 80) + '...'
      }

      moviesList.push(
        <Cards
          mouviesImages={movieData[i].img}
          moviesNames={movieData[i].name}
          moviesDescriptions={shortDesc}
          moviesNote={movieData[i].note}
          moviesVote={movieData[i].vote}
          handleClickAddMovieParent={handleClickAddMovie}
          handleClickRemoveMovieParent={handleClickRemoveMovie}
          like={wishlistFilm.find((filmName) => filmName.name === movieData[i].name) ? true: false}
        />
      );
    };

    console.log(moviesList)

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
