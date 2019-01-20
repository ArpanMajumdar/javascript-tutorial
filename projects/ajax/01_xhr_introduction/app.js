// Event listener

document.getElementById('get-button').addEventListener('click', loadData);

function loadData(event) {
    // console.log('Button clicked');

    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Open connection
    xhr.open('GET', 'data.txt', true);

    // This is used for loaders or spinners
    xhr.onprogress = function () {
        console.log('READY STATE: ', this.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').appendChild(document.createTextNode(this.responseText));
        }
    };


    // Ready state values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: processing finished and response is ready

    // Older method
    // xhr.onreadystatechange = function () {
    //     console.log('READY STATE: ', this.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //         document.getElementById('output').appendChild(document.createTextNode(this.responseText));
    //     }
    // }

    xhr.send();
}