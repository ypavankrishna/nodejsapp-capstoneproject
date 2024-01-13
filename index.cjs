const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('{ "response": " This is Upgrad Nodejs Capstone Project2" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello from Node.js Application - Capstone Project" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3030);
module.exports = app;

