// const crypto = require('crypto');

// // function encrypt(plainString, AesKey, AesIV) {
// //     const cipher = crypto.createCipheriv("aes-256-cbc", AesKey, AesIV);
// //     let encrypted = Buffer.concat([cipher.update(Buffer.from(plainString, "utf8")), cipher.final()]);
// //     return encrypted.toString("base64");
// // }

// // function decrypt(base64String, AesKey, AesIV) {
// //     const decipher = crypto.createDecipheriv("aes-256-cbc", AesKey, AesIV);
// //     const deciphered = Buffer.concat([decipher.update(Buffer.from(base64String, "base64")), decipher.final()]);
// //     return deciphered.toString("utf8");
// // }

// // // const key = crypto.randomBytes(32); //Need 32 bytes (256 bits) key as we are using AES-256 encryption
// // const key = Buffer.from("J/PYjc1ftDFK5+77U1PB80v2TamokGap5yCIP2YI6tQ=", "base64");
// // // const iv = crypto.randomBytes(16); //Need 16 bytes (128 bits) Initialization vector as default block size is 128 bits
// // const iv = Buffer.from("000000000", "base64");

// // // Its better to pass iv and key in bytes/buffer
// // var encryptedData = encrypt("some data to encrypt", key, Buffer.alloc(0));
// // console.log(encryptedData);
// // // Need same key and iv for decryption otherwise it won't work
// // var decryptedData = decrypt(encryptedData, key, Buffer.alloc(0))
// // console.log(decryptedData);

// crypto.getCipherInfo('aes-256-ctr')
// // {
// //   mode: 'ctr',
// //   name: 'aes-256-ctr',
// //   nid: 906,
// //   blockSize: 1,
// //   ivLength: 16, // iv of a given size is REQUIRED
// //   keyLength: 32
// // }

// crypto.getCipherInfo('aes-128-ecb')
// // {
// //   mode: 'ecb',
// //   name: 'aes-128-ecb',
// //   nid: 418,
// //   blockSize: 16,
// //   keyLength: 16
// //   // no ivLength, iv is not used, null or zero-length typed array can be provided
// // }

// crypto.createDecipheriv('aes-128-ecb', Buffer.alloc(16), Buffer.alloc(0));
// crypto.createDecipheriv('aes-128-ecb', Buffer.alloc(16), null);
// // works

//AES 128 Encryption Demo Program
// crypto module
const crypto = require("crypto");

// encrypt the message
function encrypt(plainText, securitykey, outputEncoding) {

    const iv = Buffer.alloc(16).fill(0);
    const cipher = crypto.createCipheriv("aes-128-cbc", securitykey, iv);
    return Buffer.concat([cipher.update(plainText), cipher.final()]).toString(outputEncoding);
}

//AES decryption
function decrypt(cipherText, securitykey, outputEncoding) {
    const iv = Buffer.alloc(16).fill(0);
    const cipher = crypto.createDecipheriv("aes-128-cbc", securitykey, iv);
    return Buffer.concat([cipher.update(cipherText), cipher.final()]).toString(outputEncoding);
}


// secret key generate 16 bytes of random data
const securitykey = crypto.randomBytes(16);

// protected data
const secretMessage = "This is a secret message";

//AES encryption
const encrypted = encrypt(secretMessage, securitykey, "base64");
console.log("Encrypted message:", encrypted);
console.log('key text: ', securitykey);

//AES decryption
const decrypted = decrypt(Buffer.from(encrypted, "base64"), securitykey, "utf8")
console.log("Decrypted string:", decrypted);