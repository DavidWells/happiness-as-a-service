/* Lambda function used with Alexa skill */
module.exports = (event, context, callback) => {
  console.log('event.request.intent', event.request.intent)
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: `Yes. I am your true friend. You can always count on me`,
      },
      shouldEndSession: false,
    },
  };
  callback(null, response);
};
