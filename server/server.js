const express = require("express");
const ytdl = require("ytdl-core");
// const youtube = require('ytdl-core');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dateObject = new Date();
const seconds = dateObject.getSeconds();
app.listen("5000", function () {
  console.log("Server is started successfully");
});

app.get("/", (req, res) => {
  let videoURL = req.query.url;
  console.log(videoURL);
  res.writeHead(200, {
    "Content-Disposition": `attachment; filename= ${seconds}+video.mp4`,
  });
  ytdl(videoURL, {
    format: "mp4",
  }).pipe(res);
});

// app.post("/upload", (req, res) => {
//   console.log(JSON.stringify(req.body.url));
//   res.writeHead(200, {
//     "Content-Disposition": 'attachment; filename="video.mp4"',
//   });
//   ytdl(req.body.url, {
//     format: "mp4",
//   }).pipe(res);
//   // res.send({"url" : req.body.url});
// });
