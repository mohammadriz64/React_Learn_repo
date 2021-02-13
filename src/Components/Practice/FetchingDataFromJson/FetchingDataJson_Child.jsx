import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Style.css";

export const FetchingDataJson_Child = ({ itemCurrent }) => {
  return (
    <div className="card_data">
      <Card className="card_detailing">
        <Card.Img
          className="card_img"
          variant="top"
          src={itemCurrent.image}
          alt="images"
        />
        <Card.Body>
          <Card.Title>
            {itemCurrent.name} {itemCurrent.field}
          </Card.Title>
          <Card.Text>
            {itemCurrent.required} <br />
            <p style={{ textAlign: "center" }}>
              This is to inform All students that
              <br /> many companies will visit our campus
              <br /> for hiring student in various fields.
            </p>
          </Card.Text>
          <Button className="card_button" variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
