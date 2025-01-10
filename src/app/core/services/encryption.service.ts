import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypt(data: any): string {
    try {
      debugger;
      // Step 1: Convert the input data to a string (in case it's an object)
      const dataString = typeof data === 'string' ? data : JSON.stringify(data);
      console.log("Data to Encrypt:", dataString); // Log the data to be encrypted

      // Step 2: Define the encryption key and IV
      const key = CryptoJS.enc.Utf8.parse('A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6'); // 32-byte key
      const iv = CryptoJS.enc.Utf8.parse('1234567890ABCDEF'); // 16-byte IV

      // Step 3: Encrypt the data
      const encryptedBytes = CryptoJS.AES.encrypt(dataString, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC, // AES mode, must match API's encryption
        padding: CryptoJS.pad.Pkcs7 // Padding scheme
      });

      // Step 4: Base64 encode the encrypted data
      const encryptedData = encryptedBytes.toString(); // Already in Base64 format
      console.log("Encrypted Data (Base64):", encryptedData); // Log the encrypted Base64 string

      return encryptedData;

    } catch (error) {
      console.error("Encryption failed:", error);
      throw new Error('Encryption failed');
    }
  }
}
