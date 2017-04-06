# Happiness as a serverless service

Can true happiness be achieved through technology? I don't know but lets try!

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [1. CLI Love](#1-cli-love)
- [2. `GET` Love](#2-get-love)
- [3. `GET` HTML Love](#3-get-html-love)
- [4. Speech Love](#4-speech-love)
- [5. Text Love](#5-text-love)
- [6. Tweet Love](#6-tweet-love)
- [7. Cuteness Scraper](#7-cuteness-scraper)
<!-- AUTO-GENERATED-CONTENT:END -->

## Prerequisites

Make sure you have the serverless CLI installed on your machine.

```
npm install serverless -g
```

[More info on getting the serverless CLI setup](https://github.com/serverless/serverless#quick-start)

## Setup

1. Create the directory

  ```bash
  mkdir happiness-as-a-service
  cd happiness-as-a-service
  ```

2. Create the serverless service

  ```bash
  sls create --template aws-nodejs --name happiness-service
  ```

## 1. CLI Love

Lets invoke a function from the CLI

`handler.js` has an exported function `hello`

We need to deploy that to the interwebs.

`serverless.yml` tells the serverless CLI what configuration is needed. More specifically

- Where to upload the code
- What code to upload
- How to trigger the code

```yml
service: happiness-service

provider:
  name: aws
  runtime: nodejs6.10

functions:
  hello:
    handler: handler.hello
```

Let's deploy the service

```bash
sls deploy
```

Now let's invoke the code!

```
sls invoke -f hello
```

```
{
    "statusCode": 200,
    "body": "{\"message\":\"Hello David. It's time to get happy\"}"
}
```

## 2. `GET` Love

Let's kick this up a notch and expose things to the web.

`handler.js` has an exported function `helloInternet`

We need to expose this to the web via an http endpoint (aka live URL)

To do that, we need to add the `event` block to the function definition in `serverless.yml`

```
helloInternet:
  handler: handler.helloInternet
  events:
    - http:
        path: oh-hai
        method: get
```

More info on the [http event configuration](https://serverless.com/framework/docs/providers/aws/events/apigateway/)

Then we need to deploy our function

```bash
sls deploy
```

## 3. `GET` HTML Love

The function `helloInternetHTML` will return us some HTML instead of JSON from lambda.


## 4. Speech Love

The `alexaFriendCheck` triggered when a custom alexa skill is run.

For more on custom alexa skills, [checkout the example](https://github.com/serverless/examples/tree/master/aws-node-alexa-skill).


# 5. Text Love

The `textMeNiceThings` function leverages the twilio API and runs on a serverless cron job.

It sends me nice messages every minute to keep my spirits high.

# 6. Tweet Love

The `tweetMeNiceThings` function leverages the twitter API and also runs on a serverless cron job.

It tweets me every minute and let's me know nice things about myself.

# 7. Cuteness Scraper

The `cuteScraper` function makes requests out to `cuteoverload.com` and then parses the HTML with the `cheerio` module to return cute images.

This is my favorite 😃
