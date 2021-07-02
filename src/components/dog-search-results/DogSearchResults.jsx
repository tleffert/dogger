import { useState, useEffect } from 'react';
// import LazyLoad from 'react-lazy-load';
import LazyLoad from 'react-lazyload';

import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

import DogTile from '../dog-tile/DogTile';

const DogSearchResults = (props) => {

    return (
        <Container>
            <CardDeck>
            {
                props.results.map(dogger => (
                    <Col className="mt-3" md="3" key={dogger.breed}>
                        <LazyLoad>
                            <DogTile dogger={dogger}></DogTile>
                        </LazyLoad>
                    </Col>
                ))
            }
            </CardDeck>
        </Container>
    );
}

export default DogSearchResults;
