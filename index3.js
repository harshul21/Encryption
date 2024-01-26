const CryptoJS = require('crypto-js');

var ciphertext = "34d142432a778d1301619ffaf47d17740a4b459f44bb58fc5a83dd3259ec41e7";
var key = "3dbd28c01c70b33a9bd686f24ea4521a";
var iv = "0000000000000000"; // 16 bytes IV

var ciphertextWA = CryptoJS.enc.Hex.parse(ciphertext);
var keyWA = CryptoJS.enc.Hex.parse(key);
var ivWA = CryptoJS.enc.Hex.parse(iv);

var decrypted = CryptoJS.AES.decrypt(
    { ciphertext: ciphertextWA },
    keyWA, 
    { iv: ivWA }
);

console.log(decrypted.toString(CryptoJS.enc.Utf8)); 
