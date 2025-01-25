const crypto = require('crypto');

// Synchronous function (block the main thread)
const encryptedPasswordSync = crypto.pbkdf2Sync("password", "salt", 1000000, 512, 'sha512');
console.log("1: Synchronously Encrypted Password:");
console.log(encryptedPasswordSync.toString('hex'));

// Asynchronous function
crypto.pbkdf2("password", "salt", 1000000, 512, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log("2: Asynchronously Encrypted Password:");
  console.log(derivedKey.toString('hex'));
});
