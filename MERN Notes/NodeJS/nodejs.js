/*
What is NodeJS? 
How NodeJS works?
Where can we use NodeJS? 
What is NPM?
What are Modules in NodeJs?
Types of Modules in NodeJS?
Why NodeJs is preferred over other backend technologies like Java and Php?
Which Database is the most popularly used with NodeJS?
Mention a couple of popular libraries used in NOdeJs ? 
What are the Pros and Cons of the NodeJS?
What is Event-Driven Programming? 
What is an Event Loop? 
What is an Event Queue? 
What is Event Emitter in NodeJS? 
NodeJS Architecture? 
What are types of API functions in NodeJS? 
What is package.json file?
How to create simple ExpressJS applications? 
What are Streams in NodeJs?
What is the purpose of module.exports? 
What is REPL in NodeJs? 
What is Control Flow Functions in Node?
What is the use of Buffer class in NodeJS? 
What is Piping in NodeJs? 
What is Reactor Pattern in NodeJs? 
Describe the Exit codes in NodeJs? 
Explain the Concepts of middleware in NodeJs? 
What are the types of HTTP requests? 
What is the Use of the NODE_ENV variable? 
How do we Handle Errors in NodeJs?
What is the Difference between http and https?
What are the Various Timing Featues in NodeJs?
What is MVC Architecture?
What is REST API?
What are Routes?
What are Endpoints? 
libuv
What is Authentication and Autherization?
when we use req.params.id ?

************************************************************************************************
https://nodejs.dev/learn

https://nodejs.org/dist/latest-v18.x/docs/api/

https://www.npmjs.com/

http://expressjs.com/en/

NodeJs:-
-> NodeJs is an Open-Source, Cross-platform, JavaScript Runtime Environment and library for running web applications in the Server Side.
-> NodeJs is petfect for data-intesive applications as it uses an Asynchronous and Event-driven model.
-> NodeJS runs on chrome V8 engine which converts javascript code into machine code.

Data-intensive : Data-intensive computing is a class of parallel computing applications which use a data parallel approach to process 
                 large volumes of data typically terabytes or petabytes in size and typically referred to as big data.

-------------------------------------------------------------------------------------------------
How NodeJs Work:-

-> NodeJs accepts the request from the client and sends the response, while working with them NodeJS handles them with single thread.
-> To operate I/O operations or requests NodeJS uses conceps of threads.
-> Thread is a sequence(set) of instructions that the server needs to perform.
-> It runs parallelly on the server to provide information to multiple clients.
-> Each request from the client is an event.
-> it can handle concurrent requests with a single thread without blocking requests.
-> NodeJS basically works on two concepts: 
    - Asynchronous
    - Non-blocking I/O
Asynchronous:-
   -> Asynchronous means executing a callback function. 
   -> The moment we get response from the other server or database, it will execute callback function.
   -> Callback functions are called as soon as some work is finished, because of Event Driven Architecture.

Non-blocking I/O:-
    -> Non-blocking I/O means working with multiple requests without blocking the thread for a single request.
-------------------------------------------------------------------------------------------------
Where can we use NodeJS?

-> Web applications
-> Distributed System
-> Network applications

-------------------------------------------------------------------------------------------------
What is NPM?

-> NPM stands for Node Package Manager.
-> It is responsible for managing all the packages and modules for NodeJS.
-> NPM provides two main functionalities:
        1. It provides online repository for nodejs core-modules/in-build modules which are seachable on https://nodejs.org/dist/latest-v18.x/docs/api/
        2. It also provides command line utility to install NodeJs packages, does version management and dependency management of NodeJs.
                https://www.npmjs.com/

-----------------------------------------------------------------------------------------------
What are Modules in NodeJs?

-> Modules are like JavaScript Libraries and a piece of Code that can be used in NodeJs applications to include set of functions.
-> To include module in a NodeJS application, we use require() function with the paranthesis containing the name of the module.

Eg:- Creating a web server

var http = require('http');   // includes module 

var server = http.createServer(function (req, res) {
    console.log("Server created");
});
server.listen(2000);

-----------------------------------------------------------------------------------------------
Types of Modules in NodeJS:

-> Core modules or In-build modules 
-> Local modules or User Defined modules
-> Third-party modules(npm.org)

-----------------------------------------------------------------------------------------------
Why NodeJs is preferred over other backend technologies like Java and Php?

-> NodeJS is really Fast.
-> NPM has over 50,000 modules.
-> Perfect for the data-intensive and real-time web applications as NodeJs never waits for an API to return data as it is 
    Non-Blocking I/O and Asynchronous.
-> It is Single threaded and follows Event-Driven Model.

-----------------------------------------------------------------------------------------------
Which Database is the most popularly used with NodeJS?

-> MongoDB is the most popularly Used Database with NodeJS.
-> It is NoSQL, cross-platform and document oriented database.
-> It provides high performance, high availability and easy scalability.
      Table - Collection
      Row - Document

-----------------------------------------------------------------------------------------------
Mention a couple of popular libraries used in NodeJs ?

-> Express
    - Express is a routing and middleware web framework that has minimal functionality of its own.
    - An Express application is basically a set of middleware function calls.

-> Mongoose

-> Nodemon

-----------------------------------------------------------------------------------------------
What are the Pros and Cons of the NodeJS?

Pros:
-> Fast Processing and an Event-Driven Model.
-> NPM has oven 50,000 packages that provides functionality to an application.
-> Best suited for Streaming huge amounts of data and I/O intensive operations.

Cons:
-> Not Suitable for Heavy Computational Tasks, like AI.
-> Dealing with Relational Database(MySQL) is not a good option for NodeJS.

-----------------------------------------------------------------------------------------------
What is Event-Driven Programming?

-> Event-Driven Programming uses Events to trigger various functions.
-> Event Can be anything like pressing a key, clicking a mouse button.

-----------------------------------------------------------------------------------------------
What is an Event Queue and Event Loop?

Event Queue:-
    As soon as the request send, the thread places the request into a queue. It is called Event Queue.

Event Loop:- 
    -> Event Loop is is an indefinite loop that continuously receives the request and processes them.
    -> It checks the queue and waits for the incoming request.

-----------------------------------------------------------------------------------------------
What is Event Emitter in NodeJS?

Event Emitter:-
    -> Event Emitter is a module that facilitates the communication between the objects in NodeJS.
    -> Most of the modules build on NodeJS, uses the EventEmitter since nodejs follows the Event-Driven Architecture.

How it works:-
    -> Event Emitter emits the data in the event, is called message.
    -> When the message event emits some data, the listener will get the data.

Event Emitter Properties:
    -> emit() :- used to trigger an event
    -> on() :- this method is used to listen the data from the event.
    -> once() :- add a one-time listener.
    -> removeListener() / off() :- remove an event listener from an event.
    -> removeAllListeners() :- remove all listeners for an event

-----------------------------------------------------------------------------------------------
NodeJS Architecture?

-----------------------------------------------------------------------------------------------
What are types of API functions in NodeJS?

-> Asynchronous - Non-blocking function
-> Synchronous  - blocking function

-----------------------------------------------------------------------------------------------
What is package.json file and package.lock.json file?

package.json :-
    -> It is the very important file in the NodeJS application.
    -> This file holds the metadata(name, version, description, main, scripts, author, license, etc...) about the particular Project.
    -> package.json file is present in the root directory of any Node Applications.
    -> It is created when we initialize the NodeJs Project using command: npm init

package-lock.json :-
    The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 
    100% reproducible in the same way even if packages are updated by their maintainers.

-----------------------------------------------------------------------------------------------
How to create simple ExpressJS applications?

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

-----------------------------------------------------------------------------------------------
What are Streams in NodeJs?

-> Streams are objects that lets you to read data or write data continuously.
-> There are Four Types of Streams:
    1) Readable     - Streams from which data can be read.
    2) Writeable    - Streams to which data can be written.
    3) Duplex       - Both Readable and Writeable streams.
    4) Transform    - Streams that can be manipulate the data while it is being read or written.

-----------------------------------------------------------------------------------------------
How do you install, update and delete dependencies?

-> install dependencies - npm install express
-> update dependencies  - npm update express
-> delete dependencies  - npm uninstall express

-----------------------------------------------------------------------------------------------
What is the purpose of module.exports?

-> The purpose of module.exports is to achieve modular programming.
-> By using module.exports, we can export the functions, objects, and references from one file to another file,
    by importing them by using the require() method.
-> If we not use modules.exports it becomes difficult to write large programs.


// car.js
exports.car = {
  brand: 'Ford',
  model: 'Fiesta',
};

module.exports = {
  brand: 'Tesla',
  model: 'Model S',
};

// app.js
const tesla = require('./car');
const ford = require('./car').car;

console.log(tesla, ford);

-----------------------------------------------------------------------------------------------
What is REPL in NodeJs?

-> REPL stands for Read Evaluate Print Loop.
-> It is a programming language environment (basically a console window) that takes single expression as user input and returns 
   the result back to the console after execution. 
-> The REPL session provides a convenient way to quickly test simple JavaScript code.

-----------------------------------------------------------------------------------------------
What is Control Flow Functions in NodeJS?

-> Control Flow Functions is a piece of code which runs in between the several Asynchronous functions calls.
-> The Control Flow does the following jobs:
    1) Control the order of Executions 
    2) Collect the data 
    3) Limit the concurrency.
    4) Call the next step in a program.

-----------------------------------------------------------------------------------------------
What is Buffer class in NodeJS?

-> The Buffer class in Node.js is designed to handle raw binary data.
-> Each buffer corresponds to some raw memory allocated outside V8.
-> buffers are usually seen in the context of binary data coming from streams, such as fs.createReadStream.
-> Buffer class is a global class that can be accessed in an application without importing the buffer module.
-> Creating a buffer using 3 methods: 

    const buf = Buffer.from('Hey!');

    const buf = Buffer.alloc(1024);

    const buf = Buffer.allocUnsafe(1024);

-> the Buffer created by alloc will be initialized with zeroes.
-> the buffer created by allocUnsafe will be uninitialized. 

-----------------------------------------------------------------------------------------------
What is Piping in NodeJs?

-> Piping is a mechanism to connect output of one stream to another stream.
-> It is normally used to get output of one stream and pass it to another stream.

-----------------------------------------------------------------------------------------------
What is Reactor Pattern in NodeJs?

-> Reactor Pattern is used to avoid the blocking of the Input/Output operations.

-----------------------------------------------------------------------------------------------
Describe the Exit codes in NodeJs?

-> exit() function. 
-> Exit code 1 is used when unhandled fatal exceptions occur. 
-> whereas Exit code 0 is used to terminate, when no more async operations are happening.
-> There are two ways that are generally used  to terminate a Node.js program:
    - process.exit() or 
    - process.exitCode variable.


const express = require('express')
const app = express()
  
var a=10;
var b=20;
  
if(a==10){
  console.log(a)
  process.exitCode=0;
}
  
console.log(b);
  
app.listen(3000, () => 
console.log('Server ready'))

-----------------------------------------------------------------------------------------------
Explain the Concepts of middleware in NodeJs?
http://expressjs.com/en/guide/writing-middleware.html
http://expressjs.com/en/guide/using-middleware.html

-> Middleware functions are functions that have access to the request object (req), the response object (res), and 
   the next middleware function in the application’s request-response cycle.
-> The next middleware function is commonly denoted by a variable named next.
-> next() is used to call the next middleware function.
-> Middleware functions can perform the following tasks:
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware function in the stack.

-> If the current middleware function does not end the request-response cycle, it must call next() to pass control to the 
   next middleware function. Otherwise, the request will be left hanging.

-> Types of Middlewares:
    - Application-level middleware :
        - Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions
    
    - Router-level middleware : 
        - Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

    - Error-handling middleware : 
        - Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three,
            (err, req, res, next)):
    
    - Built-in middleware :
        - express.static()
        - express.json()
        - express.urlencoded()
    
    - Third-party middleware
        - These third party middlewares have to install from npm.js
        - For a partial list of third-party middleware functions that are commonly used with Express, see: http://expressjs.com/en/resources/middleware.html

-----------------------------------------------------------------------------------------------
What are the types of HTTP requests?

-> HTTP request methods are the actions that ate initiated by the client to perform certain actions.
-> These HTTP requests are also called nouns or HTTP Verbs.
-> There are 9 types of HTTP requests methods:
    1) GET :-   It is used to get the desired reources from the server. It does not affect the state of the server.
    2) POST :-  It is used to submit the information to the server. It chages the state of the server. 
    3) PUT :-   It is used when we need to modify the resource which is already present in the server.
    4) PATCH :- It is used to modify only the necessary part of the data or response. it does not modify the entire response. 
    5) DELETE :- It is used to delete the specified resource using resorce id.
    6) HEAD :-  The server sends the response without body. It is similar to the GET, but is fast as it transfer small data.
    7) CONNECT :- It is used to establish two way communication between the client and the requested resource. 
                  It is used to push our proxy to start HTTP tunnel.
    8) TRACE :- It is used for debugging. It performs a message loop-back test along the path to the desired data.
    9) OPTIONS :- It is used to describe the communication options available for the target resources. 
                  The client can use URL or asterik(*) to describe the communication options available, if they want to target the server.

-----------------------------------------------------------------------------------------------
What is the Use of the NODE_ENV variable?

 -> The NODE_ENV works like a flag which indicates whether the server is running on development or production mode. 
 -> The express framework checks the flag value in the runtime and sets value depending on the environment.
 -> flag :- flag is a predefined bit or bit sequence that holds a binary value.

 if(process.env.NODE_ENV == 'development') {
	db.connect('localhost:1234')
} else {
	db.connect('https://production-server.com')
}

-----------------------------------------------------------------------------------------------
How do we Handle Errors in NodeJs?

-> we can handle errors in callbacks. Its better to use async/await to overcome drawbacks of callback and try-catch statements.
-> Creating error file and handling all type of Errors there.

-----------------------------------------------------------------------------------------------
What is the Difference between http and https?

        HTTP                                      HTTPS
    _________________________________________________________ 
1) Uses port 80 by default.                   1) Uses port 443 by default.

2) Less secure as the data can be             2) Designed to prevent hackers from accessing
   vulnarable to hackers.                        critical information.

3) Good fit for websites, designed            3) If the website needs to collect private information
   for information consumption like              like credit card number, then it is more secured protocol.
   blogs.

4) Do not need SSL Certificate.               4) Requires an SSL(Secure Sockets Layer) certificate.

5) Stands for Hyper Text Transfer Protocol    5) Stands for Hyper Text Transfer Protocol Secure

6) There is no encryption and decryption      6) There is encryption and decryption 

7) It is Fast                                 7) It is Slow

8) Works in the Application layer of the      8) Works in the Transport layer of the OSI model.
   OSI model.

9) http://                                    9) https://

-----------------------------------------------------------------------------------------------
What are the Various Timing Featues in NodeJs?

-> Timers module is provided by NodeJs, which contains various functions for executing the code after a specified period of time.
-> Various functions that are provided by this module are:

    1) setTimeout/clearTimeout - Used to schedule code execution, after a specified period of time.

            const id = setTimeout(() => {
                console.log("Should run after 2 seconds");
            }, 2000);

            clearTimeout(id);


    2) setInterval/clearInterval - Used to execute block of code multiple times.

            const id = setInterval(() => {
                 console.log("runs every 2 seconds");
            }, 2000);

            clearInterval(id);


    3) setImmediate/clearImmediate  - Used to execute code at the end of the current event loop cycle.

-----------------------------------------------------------------------------------------------
What is MVC Architecture?

-> MVC stands for Model, View and Controller. It is most popular way of organizing our Code.
-> It is using in many languages like NodeJS, C++, Java and so on.
-> Each section of MVC has different Purpose.

    Model:- 
        -> Part of the Application that deals with database. 
        -> It holds the raw data of the application.

    View:- 
        -> In views section we write code that directly interacts with the user. 
        -> Everything that user sees and interacts with the application comes under View.
        -> It makes our app look nice, as we are writing styles here.

    Controller:-
        -> In Controller section we write the logic of our application.
        -> It is a connectors between the Views and the Models.
        -> Here we call our models to get the data, and pass that data to the views, and then it sends that data to the user.

-----------------------------------------------------------------------------------------------
What is REST API?

API:-
    -> Application Programming Interface
    -> It is a set of Commands, functions, and protocols to do particular task.
    -> It is possible to track the delivery guy's location when we order food. this feature is build using Google Map API.

REST:-
    -> Representational State Transfer.
    -> REST is an architectural style for Creating websites using HTTP Protocol.

RESTful API:-
    -> REST API is an application programming interface that adheres the constraints of REST architectural styles and enables 
       interaction with RESTful web services. 

-----------------------------------------------------------------------------------------------
What are Routes?

Route:- 
    -> Route is a section of code tha associates with HTTP verbs(GET, POST, PUT, DELETE, etc).
    -> when we have an URL path, function that called to handle that path is route.
        eg:- router.route('/user').get()

-----------------------------------------------------------------------------------------------
What are Endpoints?



-----------------------------------------------------------------------------------------------
libuv

-> It is important dependency in NodeJS is libuv, a C library that is used to abstract non-blocking I/O operations.
-> It provides mechanisms to handle file system, DNS(Domain Name System), network, child processes, pipes, signal handling, polling and streaming. 
-> It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.

-----------------------------------------------------------------------------------------------
What is Authentication and Autherization?

Authentication: who you are 
Autherization: what you can do

-----------------------------------------------------------------------------------------------
when we use req.params.id ?

-> req.params.id is used, when we update or delete an item using item id.
-> id should be passed in the url.

-----------------------------------------------------------------------------------------------

*/