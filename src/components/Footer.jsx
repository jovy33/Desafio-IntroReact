import React from 'react';
import Button from "react-bootstrap/Button";

const Footer = ({ textoFooter }) => {
    return (
        <div>
            <Button variant="primary"> Te invito a seguir explorando nuestro Planeta... </Button>
            <p>{textoFooter}</p>
        </div>
    )
};

export default Footer;