document.getElementById('get-text').addEventListener('click', getTextData);

document.getElementById('get-json').addEventListener('click', getJsonData);

document.getElementById('get-api').addEventListener('click', getApiData);

const outputCard = document.getElementById('output');

function getTextData(event) {
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        }).then(function (textData) {
            outputCard.innerHTML = textData;
        }).catch(function (err) {
            console.log(err);
        });
}

function getJsonData(event) {
    fetch('users.json')
        .then(function (response) {
            return response.json();
        }).then(function (users) {
            let output = '<ul class="collection">';
            users.forEach(function (user) {
                output += `<li class="collection-item">${user.name}</li>`;
            });
            output+='</ul>'
            outputCard.innerHTML = output;
        })
}

function getApiData(event) {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        }).then(function (users) {
            let output = '<ul class="collection">';
            users.forEach(function (user) {
                output += `<li class="collection-item">${user.login}</li>`;
            });
            output+='</ul>'
            outputCard.innerHTML = output;
        })
}

