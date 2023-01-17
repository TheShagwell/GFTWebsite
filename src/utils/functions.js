export function encryptUsingAES256(text, _key, _iv) {
    var key = CryptoJS.enc.Utf8.parse(_key);
    var iv = CryptoJS.enc.Utf8.parse(_iv);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

export function decryptUsingAES256(decString, _key, _iv) {
    var key = CryptoJS.enc.Utf8.parse(_key);
    var iv = CryptoJS.enc.Utf8.parse(_iv);
    var decrypted = CryptoJS.AES.decrypt(decString, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}