const root = process.env.SERVER_URL || 'http://localhost:8080'
const fetch = require('node-fetch');
const astronautsRoot = root + '/astronauts';
const exampleAstronaut = {
    "firstName": "marco",
    "lastName": "giorgio",
    "isInSpace": true
}

const postAstronauts = function (newAstronaut) {
    return fetch(astronautsRoot, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newAstronaut)
    })
}

const getAllAstronauts = function () {
    return fetch(astronautsRoot, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}

test('Aggiungo Astronaut e poi lo ricevo', () => {
    return postAstronauts(exampleAstronaut)
    .then(postResponse => { return postResponse.json() })
    .then(postResponseJson => {
        exampleAstronaut.astrounautID = postResponseJson.astronautID;
        return getAllAstronauts();
    })
    .then(getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse[0].firstName).toEqual(exampleAstronaut.firstName)})
    .catch(e => {console.log(e)})
});