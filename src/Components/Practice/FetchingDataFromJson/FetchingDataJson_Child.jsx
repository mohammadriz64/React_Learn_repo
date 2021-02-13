import React from 'react';
import { Card,Button } from 'react-bootstrap';

export const FetchingDataJson_Child = () => {
    return (
        <div>
            <Card style={{ width: '18rem',border:"1px solid green",margin:"10%"}}>
  <Card.Img style={{width:"260px",height:"400",padding:"10px"}} variant="top" src="placement.png" />
  <Card.Body>
    <Card.Title>Placement</Card.Title>
    <Card.Text>
        This is to inform All students that many companies will visit our campus for hiring student in various fields.
     
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};
