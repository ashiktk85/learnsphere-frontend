import { CRYPTO_KEY } from "../credentials";
import CryptoJS from 'crypto-js';


const encrypt = (data) => {
  try {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), CRYPTO_KEY).toString();
    return ciphertext;
  } catch (error) {
    console.error("Encryption error:", error);
    throw error;
  }
};


const decrypt = (ciphertext) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, CRYPTO_KEY);

    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    console.log(decryptedData ,"kjgjhgj");
    
    if (!decryptedData) {
      throw new Error("Decryption failed or malformed data.");
    }

    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Decryption error:", error);
    throw error;
  }
};

export { encrypt, decrypt };
