# App Seed

This repository contains basic code, templates and configs for creating a simple angularjs based web application.

## Setup Instructions:

1. Download and install nodejs
2. Use npm to install bower, connect, serve-static and json-server

```
$ npm install -g bower connect serve-static json-server
```

3. Run bower install in the root directory. This will download and install all of the javascript dependencies for the web app

```
 $ bower install
```

Step 3 will need to be repeated if more libraries are added later

## Test Server

To run the test server, use the run.sh script in the root component-registry directory. This will run a simple web server on localhost:8080 for the web pages, and localhost:3000 for the json data files. The data is loaded from data.json.

```
$ ./run.sh
```