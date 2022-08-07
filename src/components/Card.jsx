import React from 'react';
import Card from "react-bootstrap/Card";

const CardCarta = ({ src, title, descripcion }) => {
    return (
        <div>
            <Card className="carta">
                <Card.Img variant="top" src={src}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardCarta;