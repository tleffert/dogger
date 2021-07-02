import axios from 'axios';

/**
 * Fetches entire listing of dog breeds
 */
export const listBreads = () => {
    return axios.get('https://dog.ceo/api/breeds/list/all');
}

/**
 * Fetches image info for the provided breed
 * @param  {string} breed
 */
export const getBreedImage = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
}
