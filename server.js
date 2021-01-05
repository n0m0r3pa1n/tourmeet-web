const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || 8081;
app.set('port', port);
app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + "/" + path.join('build', 'index.html'));
});
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));