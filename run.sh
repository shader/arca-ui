#!/bin/bash

# This file is for managing the html and json servers
# Use Ctrl-C to kill both at the same time

function kill-servers {
  jobs -p | xargs kill
}

trap kill-servers SIGINT

echo "Use Ctrl-C to kill all servers"

node server.js &
json-server data.json
