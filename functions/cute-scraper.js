const request = require('request')
const cheerio = require('cheerio')
const pageURL = 'http://cuteoverload.com/';

module.exports = (event, context, callback) => {
  //make an HTTP request for the page to be scraped
  request(pageURL, function(error, response, responseHtml) {
      if (error) {
        console.log(error)
        callback(error);
      }
      const $ = cheerio.load(responseHtml)
      const firstImage = $('.entry-content').find('img').eq(0).attr('src')
      // callback is sending HTML back
      const html = `
      <html>
        <style>
          body { text-align: center; }
          #cute { margin: auto; }
        </style>
        <body>
          <h1>Daily dose of cute</h1>
          <img id="cute" src="${firstImage}" />
        </body>
      </html>`;
      // callback is sending HTML back
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
        },
        body: html,
      });
  });
}
