import axios from 'axios';

export const listBreads = (bread) => {
    return axios.get('https://dog.ceo/api/breeds/list/all');
}

export const getBreedImage = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
}
