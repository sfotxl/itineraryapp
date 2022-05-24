import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const EventDetail = ({ event }) => {
  const { name, description, address } = event;
  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardBody>
        {description} || {address}
      </CardBody>
    </Card>
  );
};

export default EventDetail;
