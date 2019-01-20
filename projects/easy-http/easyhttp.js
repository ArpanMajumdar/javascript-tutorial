function EasyHttp() {
    this.http = new XMLHttpRequest();

}

//Make an HTTP GET request
EasyHttp.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            // console.log(self.http.responseText);
            callback(null, self.http.responseText);
        } else {
            callback(self.http.status);
        }
    }

    this.http.send();
}


//Make an HTTP POST request
EasyHttp.prototype.post = function (url, body, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(body));
}

//Make an HTTP PUT request
EasyHttp.prototype.put = function (url, body, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(body));
}

//Make an HTTP DELETE request
EasyHttp.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            // console.log(self.http.responseText);
            callback(null, 'Post deleted');
        } else {
            callback(self.http.status);
        }
    }

    this.http.send();
}