import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpOptionUtils } from '../utils/http-option-utils';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionUtilsService {

  private defaultOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  getHttpOptions(customOptions?: { headers?: HttpHeaders }): { headers: HttpHeaders } {
    const customHeaders = customOptions?.headers || new HttpHeaders();

    // Merge default headers with custom headers
    const mergedHeaders = this.defaultOptions.headers.keys().reduce((headers, key) => {
      return headers.set(key, customHeaders.get(key) || this.defaultOptions.headers.get(key) || '');
    }, customHeaders);

    return { headers: mergedHeaders };
  }

  
}
