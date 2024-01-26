//AES 128 Encryption Demo Program
// crypto module
const crypto = require("crypto");

// encrypt the message
function encrypt(plainText, securitykey, outputEncoding) {
    const cipher = crypto.
        createCipheriv("aes-128-ecb", securitykey, null);
    return Buffer.
        concat([cipher.update(plainText), cipher.final()])
}

//AES decryption
function decrypt(cipherText, securitykey, outputEncoding) {
    const cipher = crypto.
        createDecipheriv("aes-128-ecb", securitykey, null);
    return Buffer.
        concat([cipher.update(cipherText), cipher.final()])
}


// secret key generate 16 bytes of random data
const securitykey = crypto.randomBytes(16);

// protected data
const secretMessage = "This is a secret message";

//AES encryption
const encrypted =
    encrypt(secretMessage, securitykey, "base64");
console.log("Encrypted message:", encrypted.toString('hex'));
console.log("security key:", securitykey);


//AES decryption
const decrypted = decrypt(Buffer.
    from(encrypted, "base64"), securitykey, "utf8")
console.log("Decrypted string:", decrypted.toString('utf8'));