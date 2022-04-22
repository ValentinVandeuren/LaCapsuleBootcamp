import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Badge,
} from "reactstrap";

const Cards = (props) => {
  // let [like, setLike] = useState(false);
  let [vieuw, setVieuw] = useState(false);
  let [vieuwCounter, setVieuwCounter] = useState(0);
  let [myRatingMovie, setMyRatingMovie] = useState(0)

  let handleHeartClick = () => {
    if(props.like === true){
      // setLike(false);
      props.handleClickRemoveMovieParent(props.moviesNames);
    }else{
      // setLike(true);
      props.handleClickAddMovieParent(props.moviesNames, props.mouviesImages);
    }
  };

  let handleCamClick = () => {
    setVieuwCounter(vieuwCounter+1);
    setVieuw(true);
  };

  let handleMinVoteClick = () => {
    if(myRatingMovie > 0){
      setMyRatingMovie(myRatingMovie-1);
    }
  };

  let handlePlusVoteClick = () => {
    if(myRatingMovie <10){
      setMyRatingMovie(myRatingMovie+1);
    }
  };

  let handleStarClick = (counter) => {
    setMyRatingMovie(myRatingMovie = counter+1)
  }

  let star = []
  for(let i=0; i<10; i++){
    let counter = i;
    if(i<myRatingMovie){
      star.push(<FontAwesomeIcon onClick={ () => handleStarClick(counter) } style={{color: "#F1C40E", cursor: "pointer"}} icon={faStar} />)
    }else {
      star.push(<FontAwesomeIcon onClick={ () => handleStarClick(counter) } style={{cursor: "pointer"}} icon={faStar} />)
    }
  };


  let starMoyenne = [];
  let moyenneCounter = 0
  let counterVote = props.moviesVote;
  if(myRatingMovie === 0){
    moyenneCounter = props.moviesNote;
  }else {
    moyenneCounter = ((props.moviesNote * props.moviesVote) + myRatingMovie)/props.moviesVote + 1;
    counterVote = props.moviesVote + 1;
  }
  for(let i=0; i<10; i++){
    if(i< Math.round(moyenneCounter)){
      starMoyenne.push(<FontAwesomeIcon style={{color: "#F1C40E"}} icon={faStar} />)
    }else {
      starMoyenne.push(<FontAwesomeIcon icon={faStar} />)
    }
  };


  let heartColor;
  let camColor;
  if(props.like === true ){
    heartColor = {color: "#e74c3c"};
  }
  if(vieuw === true){
    camColor = {color: "#e74c3c"};
  }

  return (
          <Card className="cardMovie p-0">
            <CardImg
              alt="Card image starwars"
              src={props.mouviesImages}
              top
              width="100%"
            />
            <CardBody>
                <CardText>Like <FontAwesomeIcon onClick={ () => handleHeartClick() } className="heartMovie" style={heartColor} icon={faHeart} /></CardText>
                <CardText>Nombre de vues <FontAwesomeIcon onClick={ () => handleCamClick() } className="camMovie" style={camColor} icon={faVideo} /><Badge className="m-2">{vieuwCounter}</Badge></CardText>
                <CardText>Mon avis
                    {star}
                    <Badge onClick={ () => handleMinVoteClick() } style={{ cursor: "pointer" }}>-</Badge>
                    <Badge onClick={ () => handlePlusVoteClick() } style={{ cursor: "pointer" }}>+</Badge>
                </CardText>
                <CardText>Moyenne
                    {starMoyenne}
                    ({counterVote})
                </CardText>
                <CardText>{props.moviesNames}</CardText>
                <CardText>{props.moviesDescriptions}</CardText>
            </CardBody>
          </Card>
  );
};

export default Cards;