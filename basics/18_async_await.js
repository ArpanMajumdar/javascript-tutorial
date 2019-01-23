// Async automatically makes a function return a Promise
async function myFunc1() {
    return 'Hello';
}

// myFunc1().then(response => console.log(response));

async function myFunc2() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000);
    });

    let error = false;

    if (!error) {
        const response = await promise;
        return response;
    } else {
        await Promise.reject(new Error('somthing went wrong'));
    }
}

// myFunc2()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));


async function getUsers() {
    // Await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Proceed once it is resolved
    const users = await response.json();

    
    return users;
}

getUsers().then(users => console.log(users));

