import { useState, useEffect } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const DogSearch = (props) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        props.updateSearchTerm(search);
    }, [search])

    return (
        <InputGroup>
            <FormControl
                placeholder="Doggo Breed"
                onChange={(event) => setSearch(event.target.value)}
            />
        </InputGroup>
    );
}

export default DogSearch;
