const express = require('express');
// const youtube = require('ytdl-core');
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({extended: true})
)

app.listen('5000', function () {
    console.log("Server is started successfully");
});

app.get('/downloads', (req, res) => {
    
});

app.post('/upload', (req, res) => {
    console.log(JSON.stringify(req.body.url))
    res.send({"url" : req.body.url});
});
