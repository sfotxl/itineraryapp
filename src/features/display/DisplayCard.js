import {
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const DisplayCard = ({ item }) => {
  const { image, name, description, address } = item;

  return (
    <Row>
      <Col>
        <Card>
          <CardImg width="300px" src={image} alt={name} />
        </Card>
      </Col>
      <Col>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <p>{address} </p>
      </Col>
    </Row>
  );
};

export default DisplayCard;
