const crypto = require("crypto");

function encrypt(plainText, key, outputEncoding = "base64") {
    const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
    return Buffer.concat([cipher.update(plainText), cipher.final()]).toString(outputEncoding);
}

function decrypt(cipherText, key, outputEncoding = "utf8") {
    const cipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
    return Buffer.concat([cipher.update(cipherText), cipher.final()]).toString(outputEncoding);
}

const key = "1000060000000000";
const plainText = "9";
const iv = Buffer.alloc(16).fill(0);
// const encrypted = encrypt(plainText, key, "base64");
// console.log("Encrypted string (base64):", encrypted);

const encrypted = "EtgITaHs6lEvEHBipj08Kg==";
const decrypted = decrypt(Buffer.from(encrypted, "base64"), key, "utf8")
console.log("Encrypted string (base64):", encrypted);
console.log("Decrypted string:", decrypted);