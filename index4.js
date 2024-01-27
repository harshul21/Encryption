const crypto = require('crypto');
const fs = require('fs');

let iv = Buffer.alloc(16).fill(0);

// let key = '12345678123456781234567812345678';
// varHexMesssage = '24f64656f9e32bcf50759ebbfc2cd674'
// let secret_message = ':)';
// aes 256-bit cipher block chaining (cbc) encryption/decryption

const key = fs.readFileSync('key.txt', 'utf-8').trim(); // Assuming key is stored in 'key.txt'
const varHexMesssage = fs.readFileSync('message.txt', 'utf-8').trim(); // Assuming message is stored in 'message.txt'

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(varHexMesssage, 'hex', 'utf-8'); //converting hex to utf-8
decrypted += decipher.final('utf-8');

console.log('decrypted: ' + decrypted)