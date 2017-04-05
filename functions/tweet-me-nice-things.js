const Twit = require('twit');
const superb = require('superb')
const twit = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_KEY_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: process.env.TWITTER_TIMEOUT_MS
})

function postStatus(text, mediaIds) {
  return new Promise((resolve, reject) => {
    const params = {
      status: text
    };
    return twit.post('statuses/update', params, (err, data, response) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(data);
      }
    );
  });
}

module.exports.tweet = (event, context, callback) => {
  // Do tweet!
  const compliment = superb()
  postStatus(`@DavidWells you are ${compliment}`).then(data => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Our bot completed successfully!',
        data: event
      })
    };
    callback(null, response);
  })
  .catch(error => {
    console.log('Error executing Lambda function:', error);
    callback(error, null);
  });
};
