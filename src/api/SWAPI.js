import request from 'request';

export default class SWAPI {
    static getPeople() {
        return SWAPIResquest('people');
    }

    static getStarships() {
        return SWAPIResquest('starships');
    }

    static getVehicles() {
        return SWAPIResquest('vehicles');
    }

    static getPlanets() {
        return SWAPIResquest('planets');
    }

    static getFilms() {
        return SWAPIResquest('films');
    }

    static getSpecies() {
        return SWAPIResquest('species');
    }
};

function SWAPIResquest(path) {
    return new Promise((resolve, reject) => {
        request(`https://swapi.co/api/${path}`, (error, response, body) => {
            if (response.statusCode === 200) {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }
            } else {
                reject(error);
            }
        });
    });
}