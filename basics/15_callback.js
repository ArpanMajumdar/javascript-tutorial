const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);

        callback();
    }, 2000);
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

// If we call these functions one after other, getPosts() only shows Post One and Two 
// due to asynchronous call. If we want getPosts() to be called only after createPost() is completed, 
// we should pass this as a callback to createPosts().

// createPost(newPost);
// getPosts();

createPost(newPost, getPosts);
