import axios from 'axios';

const swapiFetch = axios.create({
    baseURL: 'https://swapi.co/api/',
    transformResponse: [data => JSON.parse(data)]
});

export default class SWAPI {
    static getPeople() {
        return swapiFetch
            .get('/people')
            .then(property('data'));
    }

    static getStarships() {
        return swapiFetch
            .get('/starships')
            .then(property('data'));
    }

    static getVehicles() {
        return swapiFetch
            .get('/vehicles')
            .then(property('data'));
    }

    static getPlanets() {
        return swapiFetch
            .get('/planets')
            .then(property('data'));
    }

    static getFilms() {
        return swapiFetch
            .get('/films')
            .then(property('data'));
    }

    static getSpecies() {
        return swapiFetch
            .get('/species')
            .then(property('data'));
    }

    static getNextPage(url) {
        return axios.get(url).then(property('data'));
    }
};

function property(prop) {
    return object => object[prop];
}