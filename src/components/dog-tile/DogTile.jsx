import { useState } from 'react';

import Card from 'react-bootstrap/Card';

const DogTile = (props) => {

    const [dogger, setDogger] = useState('');

    return (
        <Card>
            <Card.Img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
            <Card.ImgOverlay>
                <Card.Title>
                    {props.dogger.breed}
                </Card.Title>
            </Card.ImgOverlay>
        </Card>
    );

}

export default DogTile;
