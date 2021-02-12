#!/bin/bash

node dist/service-a/main.js &
node dist/service-b/main.js
wait