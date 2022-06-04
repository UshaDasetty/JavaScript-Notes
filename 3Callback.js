// Callback
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);


// Callback hell

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
