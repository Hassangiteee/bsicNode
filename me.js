const data  = require('./data');
const axios = require('axios');
let promise = new Promise(function(resolve,reject){
resolve(data);
});
console.log("bekki");

setTimeout(function(){
console.log("hello in 2 seconds");
},2000);

console.log("hello 3");



async function logJSONData() {
    try {
        const response = await axios.get("https://mocki.io/v1/4218c6cb-e510-4e44-b0bd-1375d2cf688a");
        const jsonData = response.data;
        return jsonData;
      } catch (error) {
        console.error(error);
        throw error; // Optionally, rethrow the error for the caller to handle
      }
      console.log("loff")
  }
  logJSONData()
  .then(jsonData => {
    console.log(jsonData);
  })
  .catch(error => {
    console.error(error);
    console.log("hello work");
  });