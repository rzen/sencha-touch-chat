UNDER CONSTRUCTION
==================

I'm in the process of making available this project. Please bear with me as this probably will take a few days.


sencha-touch-chat
=================

Example chat using Sencha Touch 2.1, NodeJS and Socket.IO

This is purely for demonstration purposes, the chat even generates random nicknames and messages to facilitate showing off simultaneous 


Installation
------------

#. Install NodeJS:

Download from nodejs.org and follow download and installation instructions.

#. Install Socket.IO:

	npm install -g socket.io

-g to install globally, or omit that to install locally. When installed locally, npm will
	create a local folder called "node_modules".

3. Go to your webserver's document root:

	cd /var/www

In this README.md we'll assume that the location of this folder is /var/www. Naturally it will vary.

3. Clone this project from GitHub:

	git clone https://github.com/rzen/sencha-touch-chat.git

Clone repo to your apache document root. 


Running chat server
-------------------

This project uses nodejs as its chat server. Server code is located in nodejs/ChatServer.js.

To start chat server:

	cd nodejs
	node ChatServer.js


Customization
-------------

This project uses http://localhost for the app itself and http://localhost:3333 as WebSocket port. This is hardcoded in the following files;

	index.html
	app.json
	app/view/Login.js
	nodejs/ChatServer.js


Using Sencha Cmd
----------------

As is the project runs in "development mode." Which means individual classes get loaded separately. 

Using Sencha Cmd to compile project takes load time for this app from roughly 10 seconds to under 1. 

Here's how:

	cd /var/www
	sencha app build production

Packaged code will be available in

	/var/www/sencha-touch-chat/build/Chat/production


Free to use
-----------

This demo code is free to be used for any righteous purpose.


Disclaimer
----------

