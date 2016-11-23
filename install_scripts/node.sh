#!/usr/bin/env bash

#nodejs
sudo apt-get purge nodejs npm -y
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs

sudo npm cache clean -f
sudo npm install -g n
sudo n 6.2.2

sudo ln -s /usr/local/n/versions/node/6.2.2/bin/node /usr/bin/node


sudo npm install -g request

sudo npm install -g jasmine-node
npm rebuild
