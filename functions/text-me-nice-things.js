/* Cron */
const superb = require('superb')
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
const MY_PHONE_NUMBER = process.env.MY_PHONE_NUMBER
const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

module.exports.textMe = (event, context, callback) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
  // use twilio SDK to send text message
  const compliment = superb()
  twilioClient.messages.create({
    to: MY_PHONE_NUMBER,
    body: `You are ${compliment}`,
    from: TWILIO_PHONE_NUMBER,
  }, (error, data) => { // eslint-disable-line
    let response = {
      headers: {
        // Required for CORS support to work
        'Access-Control-Allow-Origin': '*',
      }
    }
    if (error) {
      console.log(error)
      response.statusCode = error.status
      response.body = JSON.stringify({
        message: error.message,
        error: error
      })
      return callback(null, response);
    }
    // text message sent! ✅
    console.log(`message: ${data.body}`);
    console.log(`date_created: ${data.date_created}`);

    response.statusCode = 200
    response.body = JSON.stringify({
      message: 'Text message successfully sent!',
      data: data
    })

    callback(null, response);
  });
}
