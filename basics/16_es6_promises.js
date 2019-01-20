const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            let error = false; // Simulating error
            if (!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function () {
        let output = '';

        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

const newPost = {
    title: 'Post three',
    body: 'This is post three'
};


// Use .then() to execute a callback function and .catch() to catch an error
createPost(newPost).then(getPosts).catch(function (error) {
    console.log(error);
});