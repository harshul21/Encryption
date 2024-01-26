const CryptoJS = require('crypto-js');

var ciphertext = "79a247e48ac27ed33ca3f1919067fa64";
var key = "6268890F-9B58-484C-8CDC-34F9C6A9";
var iv = "6268890F-9B58-48";

var ciphertextWA = CryptoJS.enc.Hex.parse(ciphertext);
var keyWA = CryptoJS.enc.Utf8.parse(key);
var ivWA = CryptoJS.enc.Utf8.parse(iv);
var ciphertextCP = { ciphertext: ciphertextWA };

var decrypted = CryptoJS.AES.decrypt(
    ciphertextCP,
    keyWA, 
    { iv: ivWA }
);

console.log(decrypted.toString(CryptoJS.enc.Utf8)); // Apple
