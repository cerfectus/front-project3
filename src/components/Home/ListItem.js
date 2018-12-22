import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  CardDeck
} from "reactstrap";



const ListItem = ({
  _id,
  Title,
  deleteItem,
  editItem,
  Players,
  Time,
  date,
  Location,
  post,
  sumar,
  showsumar

  

}) => (
  <CardDeck>
    <Card>
      <CardBody>
        <CardTitle>Sports: {Title}</CardTitle>
        <CardSubtitle>Location: {Location}</CardSubtitle>
        <CardText>players: {Players}<button onClick={()=>sumar()}>{()=>showsumar()}</button></CardText>
        <CardText>Date: {date}</CardText>
        <CardText>Time: {Time}</CardText>

        <Button color="danger" onClick={() => deleteItem(_id)}>
          Eliminar
        </Button>
      </CardBody>
    </Card>
  </CardDeck>
);

export default ListItem;
