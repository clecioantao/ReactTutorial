
const http = require('http');

const server = http.createServer((req, res) => {

    const book = {
        title: "The Alchemist",
        Author: "Paulo Coelho",
        year: 1988
    };

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(book));
    res.end();

});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
