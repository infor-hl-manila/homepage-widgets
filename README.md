# Infor Homepages Widget SDK
This file contains a brief introduction to the Infor Homepages Widget SDK.
Refer to the Developers Guide PDF file in the Documentation directory for more details.

## Prerequisites
To use all parts of the Homepages Widget SDK you will need Node.js, a TypeScript compiler and an Integrated development environment (IDE) or a Text Editor. Some of the possible alternatives are listed below.

* Node.js
  * https://nodejs.org/en/
* TypeScript
  * http://www.typescriptlang.org/
  * npm install -g typescript
* Visual Studio Code (free)
  * https://code.visualstudio.com/
* Visual Studio Community (free)
  * https://www.visualstudio.com/vs/community/
* Visual Studio 2017 (license)
  * https://www.visualstudio.com/vs/


## Node.js dependencies
If you want to use any of the following parts of the SDK you need to install the Node.js dependencies. If you don't plan to use any of these you can just skip this step.

* Web server
  * A simple development web server.
* ION API Proxy
  * A developmemt proxy for widgets the use the Infor ION API.
* Minifier
  * Minify scripts and HTML.

### Install with npm
Run the following command in the Samples directory to install the Node.js dependencies.
```
npm install
```
### Install with Windows command file
Run the Install.cmd command file in the Samples directory to install the Node.js dependencies.
```
Install.cmd
```

## Widget sample code
To get an overview of the widget sample code you can open it in your development environment.

### Visual Studio
When using Visual Studio Community, Professional, Enterprise etc you can just open the solution file Samples/Widgets.sln. Since Visual Studio has a built-in web server (IIS Express) you can run the samples directly from Visual Studio.

### Visual Studio Code
Start Visual Studio Code and use File > Open Folder and navigate to Samples/Widgets. 

## Web server
The SDK includes a Node.js development web server that be used for viewing sample widgets and developing widgets. The web server is optional if you have another alternative such as the web server in Visual Studio. The web server will run on http://localhost:8080 by default and serve files from the "./Widgets" directory.

### Start web server with Windows command file
Use the StartServer.cmd command file to start the web server. Edit the command file to change the default port and path.
```
StartServer.cmd
```

### Start web server with npm
Use one of the following npm commands to start the web server. The port and path can be changed in the configuration section of the package.json file, see server_port and server_path.
```
npm start
```
```
npm run server
```

### Start web server with node
Use one of the following node commands to start the web server. The port and path can be provided as parameters. If no parameters are specified the default port 8080 and the default path "./Widgets" will be used
```
node server
```
```
node server 8080 "./Widgets"
```

## View samples
Once the web server is running you can view the default sample by navigating a browser to http://localhost:8080/index.html

### View samples with Windows command file
Use the OpenSamples.cmd command file to open the default sample in the default browser on Windows.
```
OpenSamples.cmd
```

## ION API Proxy
When developing widget that use ION API you can use the included proxy. See the ION API samples in the Samples/Widgets directory for more information. You need to know the hostname and port of the ION API server to be able to configure the proxy.

### Start proxy with Windows command file
Start the proxy using the StartIonApiProxy.cmd command file. Make sure to edit the command and provide correct values for the local port, remote  host and port.
```
StartIonApiProxy.cmd
```

### Start proxy with npm
Use the following npm command to start the proxy. The local port, remote host and remote port can be changed in the configuration section of the package.json file, see proxy_local_port, proxy_remote_host and proxy_remote_port.
```
npm run proxy
```

### Start proxy  with node
Use the following node command to start the proxy. The local port, remote host and remote port and  should be provided as parameters.
```
node proxy 8083 "domain.server.com" 443
```

## Homepages command script
The homepages command script performs different commands. For the help documentation use:
```
node homepages help
```
### Package
Widgets have to be bundled (if consisting of multiple .ts files) and minified before delivery. The package command can be used to build, minify and package a widget or a list of widgets.
```
node homepages pack "Widgets/infor.sample.helloworld"
```

## Minifier (deprecated)
Use the homepages scribe above instead. Widgets have to be bundled (if consisting of multiple .ts files) and minified before delivery. The included node script "minifywidget" can be used to do so. See more information in the Developers Guide.

The output of the minifywidget script is a zip file with a minified widget. The name of the zip file will include the name and version of the widget as well as the current date and time.

```
 node minifywidget --widget "infor.sample.minify"
```