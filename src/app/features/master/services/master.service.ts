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
    http: HttpClient
    //httpOptionUtilsService: HttpOptionUtilsService
  ) {
    super(http
       //httpOptionUtilsService
      ); // Pass dependencies to the BaseService constructor
  }

  // Fetch data using the GET service method from BaseService
  fetchFlatTypes(): Observable<any> {
    return this.httpGetService(ApiPath.FETCH_FLAT_TYPES_URL)
      .pipe(map((result: string) => {
        try {
          const parsedResult = JSON.parse(result);  // Parse the response from 'text' to JSON
          return parsedResult;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          throw error;  // Optionally throw or handle the error here
        }
      }));
  }

  // fetchFile(id: number, fileFor: string): Observable<Blob> {
  //   // Specify responseType as 'blob' for files
  //   return this.httpGetService(`${ApiPath.FETCH_FLAT_TYPES_URL}?id=${id}&fileFor=${fileFor}`, {responseType: 'blob'});
  // }

  // Fetch image or any binary file (e.g., PDF) from API
  fetchFile_v1(id: number, fileFor: string): Observable<Blob> {
    const url = `${ApiPath.FETCH_FLAT_TYPES_URL}/${id}?fileFor=${fileFor}`;  // Example URL, adjust according to your API

    // Set custom headers (e.g., authorization) if needed
    const customHeaders = new HttpHeaders({
      'Accept': 'application/octet-stream',  // Indicate that we expect binary data
    });

    // Fetch the file as a Blob (binary data)
    return this.http.get<Blob>(url, { responseType: 'blob' as 'json' });
  }
}