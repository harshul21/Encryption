const express = require('express');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// AES decryption route
app.post('/decrypt', (req, res) => {
    const { encryptedText, key, iv } = req.body;
    const ivParam = iv ? { iv: CryptoJS.enc.Base64.parse(iv) } : {};

    try {
        const decryptedText = CryptoJS.AES.decrypt(encryptedText, key, { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, ...ivParam }).toString(CryptoJS.enc.Utf8);
        res.send({ decryptedText });
    } catch (error) {
        console.error('Decryption error:', error.message);
        res.status(500).send({ error: 'Decryption failed. Invalid key, IV, or encrypted text.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
