#!/usr/bin/env bash
sudo apt update && sudo apt install nodejs npm
# install pm2
sudo npm install -g pm2
# stop any current running app
pm2 stop simpleApplication
# change directory into folder with the app
cd SimpleApplication/
#install app dependancies
npm install
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt
# start the app
pm2 start ./bin/www --name simpleApplication
