import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cards = (props) => {
      const {imgsrc, title} =props.FackData;
    
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <Card>
                <Card.Img variant="top" src={imgsrc} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
    </>
    );
};

export default Cards;