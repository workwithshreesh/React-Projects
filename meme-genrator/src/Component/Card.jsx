import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardComponent = (props) => {

    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem',margin: '10px' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={e => navigate(`/edit?url=${props.image}`)} variant="primary">{props.button}</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;