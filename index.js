const name = require('./me');
const os = require('os');
console.log(name.name);
console.log(__dirname,module);
console.log(os.freemem()); 