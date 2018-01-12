const root = process.env.SERVER_URL || 'http://localhost:8080'
const fetch = require('node-fetch');
const astronautsRoot = root + '/astronauts';
const exampleAstronaut = {
    "firstName": "marco",
    "lastName": "giorgio",
    "isInSpace": true
}
const example2Astronaut = {
    "firstName": "giorgio",
    "lastName": "marco",
    "isInSpace": false
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

const getFilteredAstronauts = function (lastName) {
    return fetch(astronautsRoot+"?lastName="+lastName, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}

test('Aggiungo due Astronaut e poi ricevo quell con cognome "giorgio"', () => {
    return postAstronauts(exampleAstronaut)
    .then(postResponse => { return postResponse.json() })
    .then(postResponseJson => {
        exampleAstronaut.astrounautID = postResponseJson.astronautID;
        postAstronauts(example2Astronaut);
        return getFilteredAstronauts(exampleAstronaut.lastName);
    })
    .then(getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse[0].firstName).toEqual(exampleAstronaut.firstName)})
    .catch(e => {console.log(e)})
});