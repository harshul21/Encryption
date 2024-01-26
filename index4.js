const crypto = require('crypto');

let iv = Buffer.alloc(16).fill(0);


// aes 256-bit cipher block chaining (cbc) encryption/decryption
let secret_message = ':)';
let key = '12345678123456781234567812345678';

// let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
// let encrypted = cipher.update(secret_message, 'utf-8', 'hex'); converting utf-8 content to hex
// encrypted += cipher.final('hex');
//console.log('encrypted: ' + encrypted)

varHexKey = '24f64656f9e32bcf50759ebbfc2cd674'
let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(varHexKey, 'hex', 'utf-8'); //converting hex to utf-8
decrypted += decipher.final('utf-8');

console.log('decrypted: ' + decrypted)