var display = document.querySelector('pre');

fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
    return response.text()
}).then(function (text) {
    display.textContent = text;

}).catch(err => console.log(err));

const requestURL = "https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
}
sendRequest('GET', requestURL)

    .then(data => console.log(data))
    .catch(err => console.log(err))




