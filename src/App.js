import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect, useCallback, Fragment } from 'react';
import _ from 'lodash';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import { listBreads } from './shared/api/dogApi';
import DogSearch from './components/dog-search/DogSearch';
import DogSearchResults from './components/dog-search-results/DogSearchResults';

function App() {

    const [allBreeds, setAllBreeds] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    // On mounting just getting our inital entire list of doggos, and working from there
    useEffect(() => {
        listBreads().then(data => {
            let breeds = [];
            let breedData = data.data.message;
            for (const breed in breedData) {
                breeds.push({
                    breed: breed,
                    subbreeds: breedData[breed]
                })
            }
            setAllBreeds(breeds);
            setSearchResults(breeds.slice(0, 8));
        })
    },[]);

    // Effect hook to filter the results when the search term is updated.
    useEffect(() => {
        setSearchResults(allBreeds.filter(dogger => dogger.breed.includes(searchTerm)));
    }, [searchTerm]);

    // Debounce helper so that we aren't thrashing resources when changing terms
    const debounceSearchUpdate = useCallback(
        _.debounce(search => {
            setSearchTerm(search);
        }, 350), []
    );

    // CB handler for search updates
    const handleSearchUpdate = (search) => {
        debounceSearchUpdate(search);
    }

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Navbar.Brand>
                    <FontAwesomeIcon icon={faPaw} className="mr-2"/>
                    <span>Dogger - The dog searcher</span>
                </Navbar.Brand>
            </Navbar>
            <Container>
                <DogSearch updateSearchTerm={handleSearchUpdate}></DogSearch>
                <DogSearchResults results={searchResults}></DogSearchResults>
            </Container>
        </Fragment>
    );
}

export default App;
