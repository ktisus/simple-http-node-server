const fs = require ('fs');
const http = require ('http');
const port = 3000;

const requestHandler = (request, response) => {
    fs.writeFileSync ('hello-world.txt', 'Hello to this greate world')
    response.end('Handling a request on port ${port}')
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('You have an error: ${err}');
    }
    return console.log('server is listening on ${port}');
});
