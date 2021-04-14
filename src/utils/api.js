import options from './constants'

class Api {
    constructor(options) {
        this._url = options.url;
    }

    authentication(name) {
        const token = localStorage.getItem('token');
        return fetch(`${this._url}${name}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
    }

    _getServerData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }


    getProfileData() {
        return this.authentication('users')
            .then(res => this._getServerData(res));
    }

    getAllData() {
        return Promise.all([this.getProfileData()]);
    }

}

const api = new Api(options);

export default api;
