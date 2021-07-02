import LazyLoad from 'react-lazyload';

import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

import DogTile from '../dog-tile/DogTile';

const DogSearchResults = (props) => {


    const buildResults = (results) => {
        return results.map(dogger => (
            <Col className="mt-3" lg="3" md="4" sm="6" key={dogger.breed}>
                <LazyLoad>
                    <DogTile dogger={dogger}></DogTile>
                </LazyLoad>
            </Col>
        ));
    }

    return (
        <Container>
            {
                props.results.length ?
                <CardDeck>
                {
                    buildResults(props.results)
                }
                </CardDeck>
                : <p className="text-center">Who let the dogs out? Because they're all gone! (who, who)</p>
            }

        </Container>
    );
}

export default DogSearchResults;
