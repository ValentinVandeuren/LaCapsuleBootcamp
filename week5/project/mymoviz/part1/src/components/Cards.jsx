import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardImg,
  CardBody,
  CardText,
} from "reactstrap";


const Cards = (props) => {
  return (
          <Card>
            <CardImg
              alt="Card image starwars"
              src={props.mouviesImages}
              top
              width="100%"
            />
            <CardBody>
                <CardText>Like <FontAwesomeIcon icon={faHeart} /></CardText>
                <CardText>Nombre de vues <FontAwesomeIcon icon={faVideo} /></CardText>
                <CardText>Mon avis
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </CardText>
                <CardText>Moyenne
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </CardText>
              <CardText>
                Star Wars: l'Ascension de Skywalker <br />
                La conclusion de la saga skywalker.De nouvelles légendes vont naitre dans cette...
              </CardText>
            </CardBody>
          </Card>
  );
};

export default Cards;
