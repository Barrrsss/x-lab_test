export const BASE_URL = 'http://agile-garden-50413.herokuapp.com/api';

export const authorize = (password, username) => {
    return fetch(`${BASE_URL}/token/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, username})
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}

export const getContent = (token) => {
    console.log(token)
    return fetch(`${BASE_URL}/users`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}
