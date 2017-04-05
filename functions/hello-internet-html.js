/* Lambda function exposed to internet via HTTP GET serving HTML */
module.exports = (event, context, callback) => {
  const name = event.queryStringParameters && event.queryStringParameters.name || 'Wafflers'

  const html = `
  <html>
    <style>
    body { text-align: center; }
      h1 { color: #73757d; }
      #puppy {
        display: none;
        margin: auto;
      }
    </style>
    <body>
      <h1>Hi ${name} 😃</h1>
      <h2>Have a great day and remember:</h2>
      <h3>You are the boss!</h3>
      <img id="puppy" src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/blog/puppy.png" />
      <script>
        setTimeout(function() {
          document.getElementById('puppy').style.display = 'block'
        }, 2000);
      </script>
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  }
  // callback is sending HTML back
  callback(null, response);
}
