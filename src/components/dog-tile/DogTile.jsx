import { useState, useEffect, Fragment } from 'react';
import LazyLoad from 'react-lazy-load';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

import { getBreedImage } from '../../shared/api/dogApi';

import styles from './DogTile.module.scss';

const DogTile = (props) => {
    const [breedImg, setBreedImg] = useState();
    const [imgLoading, setImageLoading] = useState(true);

    // Fetching picture for the breed on mounting
    useEffect(() => {
        setImageLoading(true);
        getBreedImage(props.dogger.breed).then(data => {
            setBreedImg(data.data.message);
        });
    },[]);


    useEffect(() => {
        setImageLoading(false);
    }, [breedImg]);

    // Nice little click handler to randomize the picture.
    const handleImageRandomClick = () => {
        setImageLoading(true);
        getBreedImage(props.dogger.breed).then(data => {
            setBreedImg(data.data.message);
        });
    }

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
            <Card.Img src={breedImg} fluid="true"/>
            <Card.ImgOverlay>
                <Card.Title>
                    <Badge variant="dark">{props.dogger.breed}</Badge>
                    <Button size="sm" className="ml-1"
                        onClick={handleImageRandomClick}
                        disabled={imgLoading}
                    >
                        <FontAwesomeIcon size="xs" icon={faRandom} />
                    </Button>
                    </Card.Title>
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
