/*

V8 Engine
ECMA Script
Variables 
Data Types
Interpollation
DOM 
Callbacks
Promises
Async await
Classes
Events
Event listeners and Event Target
Event Bubbling and Event Capturing
Fetch API
Arrays
Strings
Objects
Variable Scoping
Hoisting 
Closures
this keyword
'usestrict'
Pop Up boxes 
Console Object methods
Diff between parameters and arguements
IIFE
Local Storage, Session Storage and Cookies
Iterations
new keyword
Errors
Math Operators
Date Operators
Outputs
call(), apply() and bind() methods
prototype

**************************************************************************************************
V8 Engine:-

-> V8 is the name of the Javascript engine which is developed by Google chrome.
-> It is run time environment.
-> It is used to execute JavaScript code while browsing the chrome.
-> Every Browser is having Javascript engine.
     1) V8(chrome)
     2) SpiderMonkey(Firefox)
     3) Rhino(Mozilla)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
ECMA Script:-
https://www.programiz.com/javascript/ES6

-> European Computer Manfactures Association Script).
-> It is also known ECMA-262.
-> First Edition was released in 1997.
-> It is a Scripting language based on JavaScript.
-> Invented by Brendan Eich at NetsScape.
-> ES6 to ES10
-> ES6 Features are:
    1) let keyword
    2) const keyword
    3) Arrow functions
    4) For/of and For/in
    5) Object Destructuring
    6) Promises
    7) Default parameters
    8) Spread Operators
    9) Rest Operators
    10) this keyword
    11) Array methods
    12) Classes

 ---------------------------------------------------------------------------------------------------------------------
 Variables:-

 Variables: Variables are containers for storing data, Always declare Javascript variables with var, let and const keywords.

    - Mutable : type/value of a variable that can be changed.
    - Hoisting : Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. It shows undefined.
    - Not Hoisting : If variable is not declared, it will throw an error.
    - Not Mutable : we cannot change the value of the variable.
   
    var -    hoisting        &    mutable
    let -    not Hoisting    &    mutable
    const -  not Hoisting    &    not mutable

---------------------------------------------------------------------------------------------------------------------
DataTypes:-

 DataType: Type of the value assigned.
    1) Primitive types
        - String
        - Number
        - Boolean
        - Undefined
        - Null

    2) Non-primitive types
        - Object
        - Array
        - RegExp

---------------------------------------------------------------------------------------------------------------------
Interpollation: concating string with variable using ` ${}`

            const uid = 'abc123';
            var fullName = 'Usha Dasetty';
            var email = 'usha@gmail.com';
            var password = '123456';
            var confirmPassword = '123456';
            var isLoggedIn = false;

            // Interpollation
            console.log(`
                uid: ${uid}
                fullname: ${fullName}
                email: ${email}
                password: ${password}
            `);

---------------------------------------------------------------------------------------------------------------------
DOM

---------------------------------------------------------------------------------------------------------------------
Callbacks

-> A callback function is a function passed into another function as an argument.
-> A callback function executes after outer function executes.
-> Higher Order function:- A function which receives other function as an argument is called Higher Order Function.

        function greeting(name) {
        alert('Hello ' + name);
        }

        function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
        }

        processUserInput(greeting);

-> In the above example greeting() is a callback function, and processUserInput() is Higher Order Function.
-> greeting() is executed after processUserInput() executes.



Callback Hell :-

-> When we are having nested callbacks is called callback hell.
-> It is difficult to handle callback hell, to overcome this we use promises.

        setTimeout(() => {
            console.log("Hello");
            setTimeout(() => {
                console.log("Hey");
                setTimeout(() => {
                    console.log("Namaste");
                    setTimeout(() => {
                        console.log("Hi");
                        setTimeout(() => {
                            console.log("Bonjour");
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);

---------------------------------------------------------------------------------------------------------------------
Promises

-> Promises are used to handle asynchronous operations in JavaScript. 
-> It is easy to manage when dealing with multiple asynchronous operations, 
    where callbacks can create callback hell leading to unmanageable code. 

-> A Promise has four states: 
    fulfilled: Action related to the promise succeeded.
    rejected: Action related to the promise failed.
    pending: Promise is still pending i.e. not fulfilled or rejected yet.
    settled: Promise has fulfilled or rejected.

-> Parameters:
    - Promise takes two arguments resolve and reject
    - If everything went well then it call resolve().
    - If everything do not go well then it call reject().


        var promise = new Promise(function(resolve, reject) {
        const x = "usha";
        const y = "usha"
        if(x === y) {
            resolve();
        } else {
            reject();
        }
        });

        promise.
            then(function () {
                console.log('Success, You are a usha');
            }).
            catch(function () {
                console.log('Some error has occurred');
            });



Promise Hell :-

-> When we have nested promises i.e., having many then() blocks it is difficult to handle.
-> to overcome this difficult, we Async and await.


        var promise = new Promise(function(resolve, reject) {
            const x = "usha";
            const y = "usha"
            if(x === y) {
                resolve();
            } else {
                reject();
            }
        });

        promise.
            then(function () {
                console.log('Success, You are a usha');
            }).
            then(function () {
                console.log('Welcome usha');
            }).
            then(function () {
                console.log('How are you');
            }).
            catch(function () {
                console.log('Some error has occurred');
            });

---------------------------------------------------------------------------------------------------------------------
Async await

-> It's easier way to write promise.
-> async makes, a function return a Promise.
-> await makes, a function wait for a Promise.
-> The await keyword can only be used inside an async function.


            function resolveAfter2Seconds() {
                return new Promise(resolve => {
                    setTimeout(() => {
                    resolve('resolved');
                    }, 2000);
                });
            }

            async function asyncCall() {
                console.log('calling');
                const result = await resolveAfter2Seconds();
                console.log(result);   // expected output: "resolved"
            }

            asyncCall();

---------------------------------------------------------------------------------------------------------------------
Classes

-> Classes are one of the features introduced in the ES6 version of JavaScript.
-> A class is a blueprint(template) for the object. We can create an object from the class.
-> You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. 
   Based on these descriptions, you build the house. House is the object.
-> JavaScript class is a special type of function. And the typeof operator returns function for a class.

            class Person {}
            console.log(typeof Person); // function

-> The constructor method is called automatically when a new object is created.
-> Constructor
        - It has to have the exact name "constructor"
        - It is executed automatically when a new object is created
        - It is used to initialize object properties
        - If you do not define a constructor method, JavaScript will add an empty constructor method.


-> Creating JavaScript Class

            // creating a class
            class Person {
            constructor(name) {
                this.name = name;
            }
            }

            // creating an object
            const person1 = new Person('John');
            const person2 = new Person('Jack');

            console.log(person1.name); // John
            console.log(person2.name); // Jack


-> Creating JavaScript Class methods
    - It is easy to define methods in the JavaScript class. You simply give the name of the method followed by ().

            class Person {
                constructor(name) {
                this.name = name;
            }

                // defining method
                greet() {
                    console.log(`Hello ${this.name}`);
                }
            }

            let person1 = new Person('John');

            // accessing property
            console.log(person1.name); // John

            // accessing method
            person1.greet(); // Hello John


-> Getters and Setters
    - In JavaScript, getter methods get the value of an object and setter methods set the value of an object.
    - JavaScript classes may include getters and setters. You use the get keyword for getter methods and set for setter methods.

            class Person {
                constructor(name) {
                    this.name = name;
                }

                // getter
                get personName() {
                    return this.name;
                }

                // setter
                set personName(x) {
                    this.name = x;
                }
            }

            let person2 = new Person('Jack');
            console.log(person2.name); // Jack

            // changing the value of name property
            person2.personName = 'Sarah';
            console.log(person2.name); // Sarah


-> Hoisting
    - A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted.
    - accessing a class before defining it throws an error.

            // accessing class
            const p = new Person(); // ReferenceError

            // defining class
            class Person {
            constructor(name) {
                this.name = name;
            }
            }


-> 'use strict'
    - Classes always follow 'use-strict'. All the code inside the class is automatically in strict mode.

            class Person {
            constructor() {
                a = 0;
                this.name = a;
            }
            }

            let q = new Person(); // ReferenceError: a is not defined"

---------------------------------------------------------------------------------------------------------------------
Events

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

-> The change in the state of an object is known as an Event.
-> In html, there are various events which represents that some activity is performed by the user or by the browser. 
   When javascript code is included in HTML.
-> The process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.
-> Event Handlers can be used to handle and verify user input, user actions, and browser actions.
-> Some of the HTML events and their event handlers are:

    1) Mouse Events
        - onclick : When mouse click on an element.
        - onmouseover : When the cursor of the mouse comes over the element.
        - onmouseout : When the cursor of the mouse leaves an element.
        - onmousedown : When the mouse button is pressed over the element.
        - onmouseup	: When the mouse button is released over the element.
        - onmousemove : When the mouse movement takes place.

    2) Keyboard Events
        - onkeydown & onkeyup : When the user press and then release the key.

    3) Form Events
        - onfocus : When the user focuses on an element
        - onsubmit : When the user submits the form.
        - onblur : When the focus is away from a form element.
        - onchange : When the user modifies or changes the value of a form element.

    4) Window/Document/Screen Events
        - onload : When the browser finishes the loading of the page.
        - onunload : When the visitor leaves the current webpage, the browser unloads it.
        - onresize : When the visitor resizes the window of the browser.

    5) Click Event
    6) MouseOver Event
    7) Focus Event
    8) Keydown Event
    9) Load event

---------------------------------------------------------------------------------------------------------------------
Event listeners
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

-> The addEventListener() method is used to attach an event handler to a particular element.
-> The addEventListener() method is an inbuilt function of JavaScript.


Event Target 
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

---------------------------------------------------------------------------------------------------------------------
Event Bubbling and Event Capturing

---------------------------------------------------------------------------------------------------------------------
Fetch API
https://www.javascripttutorial.net/javascript-fetch-api/

-> The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

---------------------------------------------------------------------------------------------------------------------
Arrays
https://www.programiz.com/javascript/array

-> An array is an object that can store multiple values at once.
        - Here, words is an array. The array is storing 3 values.

          const words = ['hello', 'world', 'welcome'];


-> Creating an array
        - Using array literals []   
            const array1 = ["eat", "sleep"];

        - Using the new keyword
            const array2 = new Array("eat", "sleep");
            

-> Array Examples

            // empty array
            const myList = [ ];

            // array of numbers
            const numberArray = [ 2, 4, 6, 8];

            // array of strings
            const stringArray = [ 'eat', 'work', 'sleep'];

            // array with mixed data types
            const newData = ['work', 'exercise', 1, true];

            // can also store arrays, functions and other objects inside an array. 
            const newData = [
                {'task1': 'exercise'},
                [1, 2 ,3],
                function hello() { console.log('hello')}
            ];


-> Accessing the element of an array.

            const myArray = ['h', 'e', 'l', 'l', 'o'];

            // first element
            console.log(myArray[0]);  // "h"

            // second element
            console.log(myArray[1]); // "e"


-> Array methods

        - concat() : joins two or more arrays and returns a result

                    var concatElement = ['a', 'b'];
                    console.log(concatElement.concat('c'));     // ['a', 'b', 'c']

        - indexOf() : searches an element of an array and returns its position

                    const ElementIndex = ['Fire', 'Air', 'Water'];
                    console.log(ElementIndex.indexOf('Air'));    // 1

        - find() : returns the first value of an array element that passes a test

                    const arr = [1, 6, 45, 75, 43];
                    const findElement = arr.find(element => element > 40 );
                    console.log(findElement);  // 45

        - findIndex() : returns the first index of an array element that passes a test

                    const array1 = [5, 12, 8, 130, 44];
                    const isLargeNumber = (element) => element > 10;
                    console.log(array1.findIndex(isLargeNumber));   // 1

        - forEach() : calls a function for each element

                    const array = ['a', 'b', 'c'];
                    array.forEach(element => console.log(element));

        - includes() : checks if an array contains a specified element

                    const pets = ['cat', 'dog', 'bat'];
                    console.log(pets.includes('cat'));   // true

        - push() : adds a new element to the end of an array and returns the new length of an array

                    const animals = ['pigs', 'goats', 'sheep'];
                    const count = animals.push('cows');

                    console.log(count);    // 4
                    console.log(animals);  // ["pigs", "goats", "sheep", "cows"]

        - unshift() : adds a new element to the beginning of an array and returns the new length of an array

                    const animals = ['pigs', 'goats', 'sheep'];
                    const count = animals.unshift('cows');

                    console.log(count);    // 4
                    console.log(animals);  // ["cows", "pigs", "goats", "sheep"]

        - pop() : removes the last element of an array and returns the removed element

                    const animals = ['pigs', 'goats', 'sheep'];
                    const DeletedElement = animals.pop();

                    console.log(DeletedElement);    // "sheep"
                    console.log(animals);           // ["pigs", "goats"]

        - shift() : removes the first element of an array and returns the removed element

                    const animals = ['pigs', 'goats', 'sheep'];
                    const DeletedElement = animals.shift();

                    console.log(DeletedElement);    // "pigs"
                    console.log(animals);           // ["goats", "sheep"]

        - sort() : sorts the elements alphabetically in strings and in ascending order

                    const words = ['Ball', 'Dog', 'Apple', 'Cat'];
                    const words1 = ['ball', 'Dog', 'apple', 'Cat'];

                    words.sort();
                    words1.sort();

                    console.log(words);    // ["Apple", "Ball", "Cat", "Dog"]
                    console.log(words1);   // ["Cat", "Dog", "apple", "ball"]

        - slice() : selects the part of an array and cuts the array, i.e., excludes last element and returns the new array

                    - slice()
                    - slice(start)
                    - slice(start, end)

                    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
                    const SpliceElement = animals.slice(0,2);

                    console.log(SpliceElement);    // ["ant", "bison"]


        - splice() : removes or replaces existing elements and/or adds new elements

                    - splice(start, deleteCount)
                    - splice(start)
                    - splice(start, deleteCount)
                    - splice(start, deleteCount, item1)
                    - splice(start, deleteCount, item1, item2, itemN)

                    const animals = ['pigs', 'goats', 'sheep'];
                    const SpliceElement = animals.splice(1,2);

                    console.log(SpliceElement);    // ["goats", "sheep"]
                    console.log(animals);    // ["pigs"]

        - join() : The join() method creates and returns a new string by concatenating all of the elements in an array, 
                   separated by commas or a specified separator string. If the array has only one item, then that item will be 
                   returned without using the separator.

                    const joinElements = ['Fire', 'Air', 'Water'];
                    console.log(joinElements.join('-'));      // "Fire-Air-Water"

        - every() : it returns true, only when each and every element satisfies the condition, else false.

                    const arr = [1, 44, 67, 3, 65, 23];

                    const EveryElement = arr.every(element => element < 100);
                    console.log(EveryElement);  // true

        - some() : it returns true, if any element satisfies the condition.

                    const arr = [1, 44, 67, 3, 65, 23];

                    const SomeElements = arr.some(element => element > 50);
                    console.log(SomeElements);  // true

        - reduce() : 

---------------------------------------------------------------------------------------------------------------------
Strings

-> JavaScript string is a primitive data type that is used to work with texts. 

-> Creating JavaScript Strings
        - Single quotes 
        - Double quotes
        - Backticks

        //strings example
        const name = 'Peter';
        const name1 = "Jack";
        const result = `The names are ${name} and ${name1}`;

-> Accessing String Character

        const a = 'hello';
        console.log(a[1]);           // "e"
        console.log(a.charAt(1));    // "e"

-> In JavaScript, strings are immutable. That means the characters of a string cannot be changed.

        let a = 'hello';
        a[0] = 'H';
        console.log(a);    // "hello"

-> you can assign the variable name to a new string.

        let a = 'hello';
        a = 'Hello';
        console.log(a);    // "Hello"

-> JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values.

        const a = 'a';
        const b = 'A'
        console.log(a === b);    // false

-> The JavaScript String() function is used to convert various data types to strings.

        const a = 225;     // number
        const b = true;    // boolean

        //converting to string
        const result1 = String(a);
        const result2 = String(b);

        console.log(result1);    // "225"
        console.log(result2);    // "true"

-> String methods

        - charAt(index) : returns the character at the specified index

                const sentence = 'JavaScript';
                const index = 5;
                console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

        - concat() : joins two or more strings

        - replace() : replaces a string with another string

        - split() : converts the string to an array of strings

        - substr(start, length) : returns a part of a string

        - substring(start,end) : returns a part of a string

        - slice(start, end) : returns a part of a string

        - toLowerCase() : returns the passed string in lower case

        - toUpperCase() : returns the passed string in upper case

        - trim() : removes whitespace from the strings

        - includes() : searches for a string and returns a boolean value

        - search() : searches for a string and returns a position of a match

---------------------------------------------------------------------------------------------------------------------
Objects

-> JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
-> JavaScript objects are a bit different. You do not need to create classes in order to create objects, like other programming languages.
-> Each member of an object is a "key: value" pair separated by commas and enclosed in curly braces {}.
-> "key: value" pairs are called properties.

            // object
            const student = {
                firstName: 'usha',
                class: 10
            };


-> Creating an Object 

    - using new object()

            let student = new object();
            student.firstName = 'usha';
            student.class = 10;

    - using {}

            const student = {
                firstName: 'ram',
                class: 10
            };     


-> Accessing Object Properties:

    - Using dot notation

            const person = { 
                name: 'John', 
                age: 20, 
                };
            console.log(person.name);     // John


    - Using bracket notation

            const person = { 
                name: 'John', 
                age: 20, 
            };
            console.log(person["name"]);   // John


-> Changing property values

    - using dot notation

            const person = { 
                name: 'John', 
                age: 20, 
            };
            person.name = 'Usha';

    - using bracket notation

            const person = { 
                name: 'John', 
                age: 20, 
            };
            person['name] = 'Usha';


-> Deleting a property

            const person = { 
                name: 'John', 
                age: 20, 
            };
           delete person.age;


-> Nested Objects

            const student = { 
                name: 'John', 
                age: 20,
                marks: {
                    science: 70,
                    math: 75
                }
            }

            console.log(student.marks);                   // {science: 70, math: 75}
            console.log(student.marks.science);           // 70

            console.log(student["marks"]);                // {science: 70, math: 75}
            console.log(student["marks"]["science"]);     // 70


-> Object methods

            const person = {
                name: 'Sam',
                age: 30,

                // using function as a value
                greet: function() { console.log('hello') }
            }

            person.greet();      // hello

---------------------------------------------------------------------------------------------------------------------
Variable Scoping

-> Scope refers to the availability of variables and functions in certain parts of the code.
-> a variable has two types of scope:
    - Global scope
    - Local scope


-> Global Scope:
    - A variable declared at the top of a program or outside of a function is considered a global scope variable.
    - The value of a global variable can be changed inside a function.
    - It allows both mutation and hoisting of variables.

        
            var a = "hello";

            function greet() {
                a = 3;
            }

            // before the function call
            console.log(a);   // "hello"

            //after the function call
            greet();
            console.log(a);   // 3


-> Local Scope / function scope:
    - it can only be accessed within a function.


            let a = "hello";

            function greet() {
                let b = "World"
                console.log(a + b);    // helloWorld
            }

            greet();
            console.log(a + b);    // Uncaught ReferenceError: b is not defined" -> because, b is a local variable, can't be accessed outside of the function.


-> Block Scope:

            let a = 'Hello';   // global variable

            function greet() {
                let b = 'World';    // local variable
                console.log(a + b);

                if (b == 'World') {
                    let c = 'hello';    // block scope variable
                    console.log(a + b + c);
                }
                console.log(a + b + c);     // c cannot be accessed 
            }

            greet();


-> Lexical Scope:
    - A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function 
      defined after the variable declaration. 

---------------------------------------------------------------------------------------------------------------------
Closures

-> Before you learn about closures, we need to understand two concepts:
    - Nested Function :  a function can also contain another function.
    - Returning a function: In JavaScript, you can also return a function within a function.

-> Closure helps in the data privacy of the program.
-> Closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. 


            function greet() {
                let name = 'John';     // variable defined outside the inner function

                function displayName() {
                    return 'Hi' + ' ' + name;
                }

                return displayName;
            }

            const g1 = greet();
            console.log(g1);     // returns the function definition
            console.log(g1());   // returns the value -> Hi John

---------------------------------------------------------------------------------------------------------------------
this keyword

-> this keyword refers to the object where it is called.

-> Inside Global Scope
    - When this is used alone, this refers to the global object (window object in browsers).
    - this.name is the same as window.name.

            let a = this;
            console.log(a);     // Window {}

            this.name = 'Sarah';
            console.log(window.name);   // Sarah


-> Inside Function
    - When this is used in a function, this refers to the global object (window object in browsers).

            function greet() {
                console.log(this);
            }

            greet();     // Window {}


-> Inside Constructor Function
    - In JavaScript, constructor functions are used to create objects. 
    - When a function is used as a constructor function, this refers to the object inside which it is used.

            function Person() {
                this.name = 'Jack';
                console.log(this);      // person object  -> { name: "Jack" }
                console.log(this.name);     // John
            }

            let person1 = new Person();
            console.log(person1.name);      // John


-> Inside Object Method
    - When this is used inside an object's method, this refers to the object itself.

            const person = {
                name : 'Jack',
                age: 25,
                greet() {
                    console.log(this);     // person object -> {name: "Jack", age: 25, greet: ƒ}
                    console.log(this.name);     // John
                }
            }

            person.greet();
            

-> Inside Inner Function
    - When you access this inside an inner function (inside a method), this refers to the global object.

            const person = {
                name : 'Jack',
                age: 25,
                greet() {
                    console.log(this);          // {name: "Jack", age ...}
                    console.log(this.age);      // 25

                    function innerFunc() {
                        console.log(this);       // Window { ... }
                        console.log(this.age);    // undefined 
                    }

                    innerFunc();

                }
            }

            person.greet();


-> Inside Arrow Function
    - Inside the arrow function, this refers to the parent scope.
    - You can also use the arrow function to solve the issue of having undefined when using a function inside a method 

            const greet = () => {
                console.log(this);
            }
            greet();       // Window {...}

        ------------------------------------
            const greet = {
                name: 'Jack',

                sayHi () {
                    let hi = () => console.log(this.name);
                    hi();
                }
            }

            greet.sayHi();      // Jack


-> Inside Function with Strict Mode
    - When this is used in a function with strict mode, this is undefined.
    - When using this inside a function with strict mode, you can use JavaScript Function call().

            'use strict';
            this.name = 'Jack';

            function greet() {
                console.log(this.name);     // Cannot read properties of undefined (reading 'name')"
            }

            greet();            // Error - undefined
            greet.call(this);   // Jack

---------------------------------------------------------------------------------------------------------------------
'use strict';

-> In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. 
-> This makes it easier to write good and secure JS code.
-> You need to declare strict mode at the beginning of the program. If you declare strict mode below some code, it won't work.
-> Strict mode doesn't apply to block statements with {} braces.

-> Strict Mode in Variable
    - In strict mode, using a variable without declaring it throws an error.

            "use strict";

            console.log("some code");
            x = 21;       
            console.log(x);     // Uncaught ReferenceError: x is not defined"


-> Strict Mode in Function
    - You can also use strict mode inside a function. 

            myVariable = 9;
            console.log(myVariable);    // 9

            function hello() {
                'use strict';
                string = 'hello';       // Uncaught ReferenceError: string is not defined"
            }

            hello();


-> Things Not Allowed in Strict Mode

    - Undeclared variable is not allowed.

            'use strict';
            a = 'hello';    // throws an error


    - Undeclared objects are not allowed.

            'use strict';
            person = {name: 'Carla', age: 25}; // throws an error


    - Deleting an object is not allowed.

            'use strict';
            let person = {name: 'Carla'};
            delete person; // throws an error


    - Duplicating a parameter name is not allowed.

            "use strict";
            function hello(p1, p1) { 
                console.log('hello');       // throws an error
            };     
            hello();


    - Assigning to a non-writable property is not allowed.

            'use strict';
            let obj1 = {};
            Object.defineProperty(obj1, 'x', { value: 42, writable: false });

            // assignment to a non-writable property
            obj1.x = 9;     // throws an error


    - Assigning to a getter-only property is not allowed.

            'use strict';
            let obj2 = { get x() { return 17; } };

            // assignment to a getter-only property
            obj2.x = 5;     // throws an error


    - Assigning to a new property on a non-extensible object is not allowed.

            'use strict';
            let obj = {};
            Object.preventExtensions(obj);

            // Assignment to a new property on a non-extensible object
            obj.newValue = 'new value'; // throws an error

    - Octal syntax is not allowed.

            'use strict';
            let a = 010; // throws an error

    - The variable name arguments and eval are not allowed.

            'use strict';
            let arguments = 'hello'; // throws an error
            let eval = 44;

    - You cannot also use these reserved keywords in strict mode.

            implements, interface, let, package, private, protected, public, static, yield.

---------------------------------------------------------------------------------------------------------------------
PopUp Boxes

-> In Javascript, popup boxes are used to display the message or notification to the user. 

    - alert() : An alert dialog box is mostly used to inform or alert the user by displaying some messages in a small dialogue box. 

            function showAlert() {
                alert("Hi, this is an Alert box");
            }


    - confirm() : A confirmation box is used to let the user make a choice. When Javascript pops up a confirm box, 
                the user will have to click either "OK" or "Cancel" to proceed to the next step.

            function isConfirmed() {
                let conVal = confirm("Are you ready to confirm?");
            }
            isConfirmed();


    - prompt() : Javascript Prompt Box can be used when we want to get some user input. 
                 When Javascript displays a prompt box, the user will see a popup box with an input field and 
                 buttons "OK" or "Cancel" to proceed after entering an input value.

            function promptUser() {
                let userInput = prompt("Hi, What's your name?", "Usha");
            }
            promptUser();

---------------------------------------------------------------------------------------------------------------------
Console Object

-> The console object provides access to the browser's debugging console.
-> It is a property of the window object.
-> The console object is accessed with:
        window.console or just console

-> Console Object methods

        assert() : Writes an error message to the console if a assertion is false.

        clear()	: Clears the console.

        count()	: Logs the number of times that this particular call to count() has been called.

        error()	: Outputs an error message to the console.

        group()	: Creates a new inline group in the console. This indents following console messages by an additional level, 
                 until console.groupEnd() is called.

        groupCollapsed() : Creates a new inline group in the console. However, the new group is created collapsed. 
                           The user will need to use the disclosure button to expand it.

        groupEnd() : Exits the current inline group in the console.

        info() : Outputs an informational message to the console.

        log() : Outputs a message to the console.

        table()	: Displays tabular data as a table.

        time() : Starts a timer (can track how long an operation takes).

        timeEnd() : Stops a timer that was previously started by console.time().

        trace() : Outputs a stack trace to the console.

        warn() : Outputs a warning message to the console.

---------------------------------------------------------------------------------------------------------------------
Diff between parameters and arguements

-> Parameter 
    - A parameter is a variable defined by a method, that receives a value when the method is called.

-> Arguments 
    - An argument is a value, that is passed to a method when it is invoked.


            function addTwo(number) {
                return number + 2;
            }
            addTwo(4);

-> In the above example:
    - function is function keyword.
    - addTwo is the name of the function.
    - number is the parameter.
    - return number + 2; is the function body between two curly braces.
    - addTwo(4); is function invocation.
    - 4 is an argument.

---------------------------------------------------------------------------------------------------------------------
IIFE

-> An IIFE is Immediately Invoked Function Expression
-> It is a JavaScript function that runs as soon as it is defined.

---------------------------------------------------------------------------------------------------------------------
Browser Storages

    - Local Storage
    - Session Storage  
    - Cookies

-> Local Storage 
    - The localStorage stores the data with no expiration date. 
    - It is not session based, need to be deleted via programatically.
    - The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
    - It can store 5Mb to 10Mb data.
    - Client side reading only.

    - Syntax : 

        localStorage.setItem('user', 'Usha');

        const cat = localStorage.getItem('user');

        localStorage.removeItem('user');

        localStorage.clear();


-> Session Storage
    - The sessionStorage is equal to the localStorage, except that it stores the data for only one session. 
    - The data is deleted when the user closes the specific browser tab.
    - It can store 5Mb data.
    - Client side reading only.

    - Syntax : 

        sessionStorage.setItem('user', 'Usha');

        let data = sessionStorage.getItem('user');

        sessionStorage.removeItem('user');

        sessionStorage.clear();
 

-> Cookies
    - By default, The data stored in the Cookie gets expired when the page refresh.
    - Cookies are used to store sensitive information.
    - We can also set expiry date to the cookie.
    - Can store only 4Kb data.
    - Server and client side reading.

    - Syntax : 

---------------------------------------------------------------------------------------------------------------------
Iterations

---------------------------------------------------------------------------------------------------------------------
new keyword

-> The new operator lets developers create an instance of a user-defined object type.
-> one of the built-in object types that has a constructor function.

-> Syntax:
    new constructor[([arguments])]


            function Car(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            }

            const car1 = new Car('Eagle', 'Talon TSi', 1993);

            console.log(car1.make);     // "Eagle"

---------------------------------------------------------------------------------------------------------------------
Errors

-> 

---------------------------------------------------------------------------------------------------------------------
Math Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

-> Math is a built-in object that has properties and methods for mathematical constants and functions.

---------------------------------------------------------------------------------------------------------------------
Date Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

-> 

---------------------------------------------------------------------------------------------------------------------
Outputs

-> console.log()
-> document.write()
-> window.alert()
-> innerHTML

---------------------------------------------------------------------------------------------------------------------
call(), apply() and bind() methods

---------------------------------------------------------------------------------------------------------------------
prototype

---------------------------------------------------------------------------------------------------------------------

*/