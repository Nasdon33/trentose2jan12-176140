const root = process.env.SERVER_URL || 'http://localhost:8080'
const fetch = require('node-fetch');
const astronautsRoot = root + '/astronauts';
const exampleAstronaut = {
    "firstName": "marco",
    "lastName": "giorgio",
    "isInSpace": true
}
<<<<<<< HEAD
=======
const example2Astronaut = {
    "firstName": "giorgio",
    "lastName": "marco",
    "isInSpace": false
}
>>>>>>> getwithsearch

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

<<<<<<< HEAD
const getAllAstronauts = function () {
    return fetch(astronautsRoot, {
=======
const getFilteredAstronauts = function (lastName) {
    return fetch(astronautsRoot+"?lastName="+lastName, {
>>>>>>> getwithsearch
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}

<<<<<<< HEAD
test('Aggiungo Astronaut e poi lo ricevo', () => {
=======
test('Aggiungo due Astronaut e poi ricevo quell con cognome "giorgio"', () => {
>>>>>>> getwithsearch
    return postAstronauts(exampleAstronaut)
    .then(postResponse => { return postResponse.json() })
    .then(postResponseJson => {
        exampleAstronaut.astrounautID = postResponseJson.astronautID;
<<<<<<< HEAD
        return getAllAstronauts();
=======
        postAstronauts(example2Astronaut);
        return getFilteredAstronauts(exampleAstronaut.lastName);
>>>>>>> getwithsearch
    })
    .then(getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse[0].firstName).toEqual(exampleAstronaut.firstName)})
    .catch(e => {console.log(e)})
});