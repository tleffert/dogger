import { useState, useEffect, Suspense, lazy, Fragment } from 'react';
import LazyLoad from 'react-lazy-load';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import { getBreedImage } from '../../shared/api/dogApi';

import styles from './DogTile.module.scss';

const DogTile = (props) => {

    const [dogger, setDogger] = useState('');
    const [breedImg, setBreedImg] = useState('');

    useEffect(() => {
        getBreedImage(props.dogger.breed).then(data => {
            setBreedImg(data.data.message);
        });
    },[])

    // Helper to generate the subbreeds footer if needed.
    const generateSubBreedBadges = (subbreeds) => {
            let subbreedBadges = subbreeds.map(subbreed => (
                <Badge
                    className="mr-1"
                    key={props.dogger.breed+'-'+subbreed}
                    variant="secondary"
                >
                    {subbreed}
                </Badge>
            ));

            return (
                <Fragment>
                    <div>Subbreeds:</div>
                    {subbreedBadges}
                </Fragment>
            );
    }

    return (
        <Card className={styles.DogTile}>
            {//<Card.Header>{props.dogger.breed}</Card.Header>
            }
            <Card.Img src={breedImg} fluid/>
            <Card.ImgOverlay>
                <Card.Title>
                    <Badge variant="dark">{props.dogger.breed}</Badge></Card.Title>
            </Card.ImgOverlay>
            {
                props.dogger.subbreeds.length ?
                    <Card.Footer>
                        {
                            generateSubBreedBadges(props.dogger.subbreeds)

                        }
                    </Card.Footer>
                : null
            }
        </Card>
    );

}

export default DogTile;
