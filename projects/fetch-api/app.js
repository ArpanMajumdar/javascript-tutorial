document.getElementById('get-text').addEventListener('click', getTextData);

document.getElementById('get-json').addEventListener('click', getJsonData);

document.getElementById('get-api').addEventListener('click', getApiData);

const outputCard = document.getElementById('output');

function getTextData(event) {
    fetch('test.txt')
        .then(response => response.text())
        .then(textData => outputCard.innerHTML = textData)
        .catch(err => console.log(err));
}

function getJsonData(event) {
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            let output = '<ul class="collection">';
            users.forEach(user =>
                output += `<li class="collection-item">${user.name}</li>`);
            output += '</ul>'
            outputCard.innerHTML = output;
        })
        .catch(err => console.log(err));
}

function getApiData(event) {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => {
            let output = '<ul class="collection">';
            users.forEach(user =>
                output += `<li class="collection-item">${user.login}</li>`);
            output += '</ul>'
            outputCard.innerHTML = output;
        })
        .catch(err => console.log(err));
}

