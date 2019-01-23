class EasyHttp {

    // HTTP GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    // HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    // HTTP PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    // HTTP DELETE request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve('User deleted.'))
                .catch(error => reject(error));
        });
    }
}