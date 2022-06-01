import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { image, city, name } = event;
  const citylink = '/' + city;
  return (
    <Link to={citylink}>
      <Card> 
        <CardImg width="100%" height="200px" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{city}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default EventCard;
