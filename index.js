const crypto = require('crypto');

function decryptAES128CBC(encryptedText, key, iv) {
  const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  console.log(decipher);
  decipher.setAutoPadding(false);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  console.log(decrypted);
  decrypted += decipher.final('utf-8');
  return decrypted;
}

// Example usage:
const encryptedFilePath = 'bg16V5qCkfbkQ4nGZmWhurld0Tj8BArwyTRhafgiNkM=';
const encryptionKey = '0db19bb5d246964ea386c1c85e981264';
const initializationVector = Buffer.alloc(16).fill(0);

try {

  const decryptedMessage = decryptAES128CBC(encryptedFilePath, encryptionKey, initializationVector);
  console.log('Decrypted Message:', decryptedMessage);
} catch (error) {
  console.error('Error:', error.message);
}