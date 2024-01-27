const crypto = require('crypto');

// Generate a random 16-byte key for AES-128
const key = 'de45e2aa84178bc5ae23c526c080130b';

// Initialization Vector (IV) - should be random for each encryption
const iv = Buffer.alloc(16).fill(0);

// Message to encrypt
const message = '2ebc8ac8479f059aabc63d9fe0df22dd00f746b6a52cb6dbdd7aa302833e696b9f9d16c29b5d984437a6942b691d96e8fc4537ad37dc8665ed054be65cdbf330';

// Create cipher object
const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key, 'hex'), iv);
// Encrypt the message
let decryptedMessage = decipher.update(message, 'hex', 'utf-8'); 
decryptedMessage += decipher.final('utf-8');
console.log('Decrypted Message:', decryptedMessage.toString('utf8'));
console.log('Key:', key);
