import React from "react";
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
import '../styles/Home.css'

const Cards = (props) => {
  return (
          <Card className="cardMovie p-0">
            <CardImg
              alt="Card image starwars"
              src={props.mouviesImages}
              top
              width="100%"
            />
            <CardBody>
                <CardText>Like <FontAwesomeIcon className="heartMovie" icon={faHeart} /></CardText>
                <CardText>Nombre de vues <FontAwesomeIcon icon={faVideo} /><Badge className="m-2">{props.moviesViews}</Badge></CardText>
                <CardText>Mon avis
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <Button className="m-2">-{props.moviesMin}</Button>
                    <Button>+{props.moviesPlus}</Button>
                </CardText>
                <CardText>Moyenne
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </CardText>
                <CardText>{props.moviesNames}</CardText>
                <CardText>{props.moviesDescriptions}</CardText>
            </CardBody>
          </Card>
  );
};

export default Cards;
