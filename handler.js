/*
  To keep this file sane, I've split out the functions into seperate files
*/

/* Lambda function not exposed to internet */
module.exports.hello = require('./functions/hello')

/* Lambda function exposed to internet via HTTP GET */
module.exports.helloInternet = require('./functions/hello-internet')

/* Lambda function exposed to internet via HTTP GET serving HTML */
module.exports.helloInternetHTML = require('./functions/hello-internet-html')

/* Lambda function used with Alexa skill */
module.exports.alexaFriendCheck = require('./functions/alexa-friend-check')

/* Scrape cuteness */
module.exports.cuteScraper = require('./functions/cute-scraper')

/*
Send text messages function isolated because of ENV keys
./functions/text-me-nice-things
*/

/*
Send tweet function isolated because of ENV keys
./functions/text-me-nice-things
*/
