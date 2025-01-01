import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptionUtils } from '../../shared/utils/http-option-utils';
import { HttpOptionUtilsService } from '../../shared/utils/http-option-utils.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected http: HttpClient;
  //protected httpOptionUtils: HttpOptionUtilsService;

  constructor(http: HttpClient
     //httpOptionUtils: HttpOptionUtilsService
    ) {
    this.http = http;
    //this.httpOptionUtils = httpOptionUtils;
  }
  
  // Utility to get default HTTP options with custom headers if necessary
  private getHttpOptions(customHeaders?: HttpHeaders): { headers: HttpHeaders; responseType: 'text' } {
    const defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/octet-stream',
    });

    const mergedHeaders = customHeaders ? defaultHeaders.set('Custom-Header', customHeaders.get('Custom-Header') || '') : defaultHeaders;

    return {
      headers: mergedHeaders,
      responseType: 'text',  // Always return text response type
    };
  }
  

  // Generic HTTP GET service method
  httpGetService(url: string, customHeaders?: HttpHeaders): Observable<any> {
    const options = this.getHttpOptions(customHeaders);
    return this.http.get(url, options);
  }  
}