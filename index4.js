const crypto = require('crypto');

let iv = Buffer.alloc(16).fill(0);


// aes 256-bit cipher block chaining (cbc) encryption/decryption
let secret_message = ':)';
let key = '12345678123456781234567812345678';


console.log('encrypted: ' + encrypted)
varHexKey = '24f64656f9e32bcf50759ebbfc2cd674'
let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(varHexKey, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log('decrypted: ' + decrypted)