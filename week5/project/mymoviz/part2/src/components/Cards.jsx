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
  Button,
} from "reactstrap";

  const Cards = (props) => {
  const [like, setLike] = useState(false);
  const [vieuw, setVieuw] = useState(false);
  const [vieuwCounter, setVieuwCounter] = useState(0);
  const [myRatingMovie, setMyRatingMovie] = useState(0)

  let handleHeartClick = () => {
    if(like === true){
      setLike(false);
    }else{
      setLike(true);
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

  let heartColor;
  let camColor;
  if(like === true ){
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
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    ({myRatingMovie})
                    <Button onClick={ () => handleMinVoteClick() } style={{fontSize: 15, paddingTop: 0, paddingBottom: 0}} className="m-2">-1</Button>
                    <Button onClick={ () => handlePlusVoteClick() } style={{fontSize: 15, paddingTop: 0, paddingBottom: 0}}>+1</Button>
                </CardText>
                <CardText>Moyenne
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    ({props.moviesVote})
                </CardText>
                <CardText>{props.moviesNames}</CardText>
                <CardText>{props.moviesDescriptions}</CardText>
            </CardBody>
          </Card>
  );
};

export default Cards;
