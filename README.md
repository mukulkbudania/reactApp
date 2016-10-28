# Delete Old Version of node and install the latest node version 6.
- sudo rm -rf /usr/local/include/node/
- sudo rm -rf /usr/local/lib/node_modules/
- curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
- apt-get install nodejs
- sudo apt-get install -y build-essential

# Install Webpack and WebPack Dev Server Globally
- sudo npm install webpack -g
- sudo npm install bower -g
- sudo npm install webpack-dev-server -g

# Installs the dependecies specified in package.json
- npm install (Do this everytime you take the latest pull)

# start the server
- npm start

In case of any issues feel free to contact mukul.budania@paytm.com



