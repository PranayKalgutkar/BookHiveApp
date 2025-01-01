import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DecryptionService {

  constructor() { }

  decrypt(data: string): any {
   // debugger;
    //console.log("Before Decryption:", data);  // Log the incoming encrypted string

    try {
      // Step 1: Decode the Base64 string to get the encrypted data
      const decodedData = atob(data);  // Base64 decoding
      //console.log("Base64 Decoded Data:", decodedData);  // Log decoded data

      // Step 2: Decrypt using AES with the provided key and IV
      const key = CryptoJS.enc.Utf8.parse('A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6');  // 32-byte key
      const iv = CryptoJS.enc.Utf8.parse('1234567890ABCDEF');  // 16-byte IV

      const decryptedBytes = CryptoJS.AES.decrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,  // AES mode, must match API's encryption
        padding: CryptoJS.pad.Pkcs7  // Padding scheme
      });

      // Step 3: Convert decrypted data to UTF-8 string
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      //console.log("Decrypted Data (UTF-8):", decryptedData);  // Log decrypted string

      if (!decryptedData) {
        throw new Error('Decryption result is empty or invalid');
      }

      // Step 4: Assuming the decrypted data is JSON, parse it
      //const parsedData = JSON.parse(decryptedData);
      ////console.log("Parsed JSON Data:", parsedData);  // Log the final parsed JSON

      return decryptedData;

    } catch (error) {
      console.error("Decryption failed:", error);
      throw new Error('Decryption failed: Invalid format');
    }
  }
}
