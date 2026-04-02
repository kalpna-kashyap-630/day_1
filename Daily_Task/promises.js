
//promise is an object that respresents the eventual result of an asynchronous operation - either succss or failure

//Pending – initial state (still working)

//Fulfilled – operation completed successfully

//Rejected – operation failed

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
console.log(myPromise);


//promise example with setTimeout
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
