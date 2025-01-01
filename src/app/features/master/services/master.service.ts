import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { HttpOptionUtils } from '../../../shared/utils/http-option-utils';
import { BaseService } from '../../../core/services/base.service';
import { HttpOptionUtilsService } from '../../../shared/utils/http-option-utils.service';
import { ApiPath } from '../../../shared/utils/api-path';

@Injectable({
  providedIn: 'root'
})
export class MasterService extends BaseService {

  constructor(
    http: HttpClient,
    httpOptionUtilsService: HttpOptionUtilsService
  ) {
    super(http, httpOptionUtilsService); // Pass dependencies to the BaseService constructor
  }

  fetchFlatTypes(): Observable<any> {
    return this.httpGetService(ApiPath.FETCH_FLAT_TYPES_URL, { responseType: 'text' })
      .pipe(map((result) => {
        try {
          const parsedResult = JSON.parse(result);
          return parsedResult;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          throw error;  // You can throw an error or return a fallback value
        }
      }));
  }
}
// get - fetch
// post - add insert, modify update, remove delete
