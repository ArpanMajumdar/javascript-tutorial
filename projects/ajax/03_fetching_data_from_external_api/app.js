const input = document.getElementById('number');
const alert = document.querySelector('.alert');
const button = document.getElementById('get-jokes');

button.addEventListener('click', getJokes);
alert.style.display = 'none';



function getJokes(event) {

    const numJokes = parseInt(input.value);

    if (isNaN(numJokes)) {
        alert.textContent = 'Please enter number of jokes';
        alert.style.display = 'block';

        setTimeout(function () {
            alert.style.display = 'none';
        }, 2000);

    } else {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://api.icndb.com/jokes/random/${numJokes}?firstName=Rajni&lastName=Kanth`, true);
        xhr.onload = function () {
            const jokes = JSON.parse(this.responseText);

            let rowElements = '';
            jokes.value.forEach(value => {
                rowElements += `<li class="collection-item">${value.joke}</li>`
            })

            document.getElementById('joke-list').innerHTML = rowElements;
        }
        xhr.send();
    }
    event.preventDefault();
}

