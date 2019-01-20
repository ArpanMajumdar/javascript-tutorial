const http = new EasyHttp();

// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//     if (err === null) {
//         console.log("​posts", response);
//     } else {
//         console.log("error", err);
//     }
// });

const data = {
    userId: 5,
    title: 'Custom post',
    body: 'This is a custom post'
}

// const post = http.post('https://jsonplaceholder.typicode.com/posts', data, function (err,response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log("error", err);
//     }
// });

const modifiedData = {
    userId: 5,
    title: 'Modified post',
    body: 'This is a modified post'
}

// const modifiedPost = http.put('https://jsonplaceholder.typicode.com/posts/1', modifiedData, function (err, response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});




