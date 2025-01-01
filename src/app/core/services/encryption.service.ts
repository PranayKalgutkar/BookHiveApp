import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }
  encrypt(data: any): any {
    console.log("encrpy data", data);
    // Replace this with actual encryption logic
    return btoa(JSON.stringify(data)); // Example: Base64 encoding
  }
}
