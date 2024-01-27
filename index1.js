const crypto = require('crypto');

// Generate a random 16-byte key for AES-128
const key = crypto.randomBytes(16).toString('hex');

// Initialization Vector (IV) - should be random for each encryption
const iv = Buffer.alloc(16).fill(0);

// Message to encrypt
const message = 'Hello my name is Harshul. what is your name?????';

// Create cipher object
const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key, 'hex'), iv);

// Encrypt the message
let encryptedMessage = cipher.update(message, 'utf-8', 'hex');
encryptedMessage += cipher.final('hex');

console.log('Encrypted Message:', encryptedMessage);
console.log('Key:', key);
