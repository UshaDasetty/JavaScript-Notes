class Person {}
console.log(typeof Person); // function

/*******************************************************************************/

/* Creating Javascript class */

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


/*******************************************************************************/
  /* Creating Javascript class methods */

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


/*******************************************************************************/
/* Getters and setters */

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

/*******************************************************************************/
/* Hoisting */ 

// accessing class
const p = new Person(); // ReferenceError

// defining class
class Person {
  constructor(name) {
    this.name = name;
  }
}

/*******************************************************************************/
/* 'use strict' */

class Person {
    constructor() {
      a = 0;
      this.name = a;
    }
  }
  
  let q = new Person(); // ReferenceError: a is not defined"

  /*******************************************************************************/