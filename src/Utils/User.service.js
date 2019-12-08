import fetchBackend from "./fetchBackend";

export const userService = {
    getConnectedUser,
    createUser
};

function getConnectedUser() 
{
    return fetchBackend(process.env.REACT_APP_USER_API, `users?limit=50&page=0&keyCloackUuid=${localStorage.keycloakUUID}`).then(data => JSON.parse(data.body));
}

function createUser(formatedData) {
    return fetchBackend(process.env.REACT_APP_USER_API, `users`,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formatedData)
    // eslint-disable-next-line no-console
    }).catch(err => console.error(err));
}
