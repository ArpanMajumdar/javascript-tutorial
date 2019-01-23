const http = new EasyHttp();

// GET example

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// POST example

const user = {
    name: 'Arpan',
    username: 'arpan',
    email: 'arpan@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', user)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// PUT example

// http.put('https://jsonplaceholder.typicode.com/users/1', user)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));


// DELETE example
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(response => console.log(response))
    .catch(error => console.log(error));