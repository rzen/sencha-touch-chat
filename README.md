# sencha-touch-chat

Example chat application based on [Sencha Touch 2.3.1](http://www.sencha.com/products/touch/ "Sencha Touch"), [NodeJS](http://nodejs.org/ "NodeJS") and [Socket.IO](http://socket.io/ "Socket.IO").

![](https://github.com/rzen/sencha-touch-chat/blob/master/resources/Screenshots/Screenshot%20-%20Login.png?raw=true) ![](https://github.com/rzen/sencha-touch-chat/blob/master/resources/Screenshots/Screenshot%20-%20MessageList.png?raw=true)

![](https://github.com/rzen/sencha-touch-chat/blob/master/resources/Screenshots/Screenshot%20-%20node%20ChatServer.js.png?raw=true)


## Getting Started

### Clone the project

	$ git clone https://github.com/rzen/sencha-touch-chat

### Install Socket.IO and start chat server

	$ cd sencha-touch-chat/nodejs
	$ npm install socket.io
	$ node ChatServer.js &

### Build sencha touch app & start it

	$ cd ..
	$ sencha app build
 	$ sencha web -p 8888 start

### Access the chat application at

	http://localhost:8888/

### To stop chat server

	$ pkill node

## History

May 26th, 2016 Updated for Cmd 6, simplified instructions. Enjoy!
Feb 2nd, 2014 Updated for Sencha Touch 2.3.1. Simplified installation. Enjoy!

## Free to use

This demo code is free to be used for any legitimate purpose. Hopefully to learn.

Please consult with Sencha on using Sencha Touch in your projects.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software shall be used for Good, not Evil.

(Thank you Douglas Crockford)


## Disclaimer

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
