import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect, Suspense, lazy, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { listBreads } from './shared/api/dogApi';

import DogSearch from './components/dog-search/DogSearch';
import DogSearchResults from './components/dog-search-results/DogSearchResults';

function App() {

    const [allBreeds, setAllBreeds] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

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

    const handleSearchUpdate = (search) => {
        setSearchResults(allBreeds.filter(dogger => dogger.breed.includes(search)));
    }


    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Navbar.Brand>
                    <FontAwesomeIcon icon={faPaw} />
                    {' '}
                    Dogger - The dog searcher
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
