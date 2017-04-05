# Happiness as a serverless service

Can true happiness be achieved through technology? I don't know but lets try!

## Prerequisites

Make sure you have the serverless CLI installed on your machine.

```
npm install serverless -g
```

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
