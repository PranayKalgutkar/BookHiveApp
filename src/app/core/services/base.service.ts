import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptionUtils } from '../../shared/utils/http-option-utils';
import { HttpOptionUtilsService } from '../../shared/utils/http-option-utils.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected http: HttpClient;
  protected httpOptionUtils: HttpOptionUtilsService;

  constructor(http: HttpClient, httpOptionUtils: HttpOptionUtilsService) {
    this.http = http;
    this.httpOptionUtils = httpOptionUtils;
  }
  

  httpGetService(
    url: string,
    customOptions?: { headers?: HttpHeaders; responseType?: 'text' }
  ): Observable<any> {
    debugger;
    const options = this.httpOptionUtils.getHttpOptions(customOptions);

    // Ensure `responseType` is added when provided
    if (customOptions?.responseType) {
      (options as any).responseType = customOptions.responseType;
    }

    return this.http.get<any>(url, options);
  }
  
}
