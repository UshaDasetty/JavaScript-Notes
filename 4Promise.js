// Promise

var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
});
    
promise.
   then(function () {
     console.log('Success, You are a GEEK');
   }).
  catch(function () {
     console.log('Some error has occurred');
  });


  // Promise hell
    
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