const fs = require("fs");
const https = require("https");
//first argument is name place of created file and what to create//
//second argument is what to put in the file
//third is what the function sould do after the file is created
fs.writeFile(__dirname + "/index.html", "<h1>html is  great</h1>", error => {
  if (error) {
    return console.log(error);
  } else {
    return console.log("success");
  }
});

const myPhoto =
  "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";

//first argument is the url you want to work with
//second argument is a function that says what to do with the photo/file
https.get(myPhoto, response => {
  response.pipe(fs.createWriteStream(__dirname + "/myDog.jpg"));
});
