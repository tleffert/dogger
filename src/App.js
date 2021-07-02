import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect, Suspense, lazy } from 'react';

import Container from 'react-bootstrap/Container';

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
      <Container>
        <DogSearch updateSearchTerm={handleSearchUpdate}></DogSearch>
        <DogSearchResults results={searchResults}></DogSearchResults>
      </Container>
    );
}

export default App;
