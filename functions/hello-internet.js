
/* Lambda function exposed to internet via HTTP GET */
module.exports = (event, context, callback) => {

  const name = event.queryStringParameters && event.queryStringParameters.name || 'bob'

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}. It's time to get happy`
    }),
  }
  // callback is sending JSON back
  callback(null, response)
}
