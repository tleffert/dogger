import { useState, useEffect } from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

import DogTile from '../dog-tile/DogTile';

const DogSearchResults = (props) => {

    return (
        <Container>
            <CardDeck>
            {
                props.results.map(dogger => (
                    <Col md="3">
                        <DogTile dogger={dogger}></DogTile>
                    </Col>
                ))
            }
            </CardDeck>
        </Container>
    );
}

export default DogSearchResults;
