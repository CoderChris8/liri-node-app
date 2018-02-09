
require("dotenv").config();
// Grab the request package..We can now use this dependency in this file.
var Twitter = require('twitter'); // Tells node that this file is required to run the js.
var Spotify = require('node-spotify-api'); // Tells node that this file is required to run the js.
// do not do this: 'var request = require("./node_modules/request/index.js");

var nodeArgs = process.argv;

var address = "";

fs.writeFile(
  'random.txt',
  'I want it that way',
  function(err){
      if (err) {
          console.log(err);
      }
      console.log('cool');
  },

);


for (var i = 2; i < nodeArgs.length; i++) {
  
  address = address + " " + nodeArgs[i];
  
}
// var client = new Twitter({
    
//   });
   
//   var params = {screen_name: 'nodejs'};
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       console.log(tweets);
//     }
//   });

// import { twitter } from "./keys";

// // Read and set any environment variables with the dotenv package.
// require("dotenv").config();

// // Add the code required to import the keys.js file and store it in a variable.
var keys = require('./keys');

// Access your key information.
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
console.log(keys);

// Make the following commands.
// 'my tweets'
// 'spotify-this-movie'
// 'do-what-it-says'