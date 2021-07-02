import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const DogSearch = (props) => {

    return (
        <InputGroup>
            <FormControl
                placeholder="Doggo Breed"
                onChange={(event) => props.updateSearchTerm(event.target.value)}
            />
        </InputGroup>
    );
}

export default DogSearch;
