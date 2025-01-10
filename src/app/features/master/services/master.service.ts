import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BaseService } from '../../../core/services/base.service';
import { ApiPath } from '../../../shared/utils/api-path';

@Injectable({
  providedIn: 'root'
})

export class MasterService extends BaseService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/octet-stream'
  });

  textResponseType: 'text'= 'text';
  blobResponseType : 'blob' = 'blob'; 

  fetchFlatTypes(): Observable<any> {

    return this.httpGetService(ApiPath.FETCH_FLAT_TYPES_URL, this.headers, undefined, this.textResponseType)
    .pipe(
      map(response => {
        try {
          const parsedResult = JSON.parse(response);
          return parsedResult;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          throw error;
        }
      })
    );
  }

  addFlatType(postData: any): Observable<any>{
    
    return this.httpPostService(ApiPath.ADD_FLAT_TYPE_URL, postData, this.headers, undefined, this.textResponseType)
    .pipe(
      map(response =>{
        try {
          const parsedResult = JSON.parse(response);
          return parsedResult;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          throw error;
        }
      })
    )
  }

  modifyFlatType(postData: any): Observable<any>{
    
    return this.httpPutService(ApiPath.MODIFY_FLAT_TYPE_URL, postData, this.headers, undefined, this.textResponseType)
    .pipe(
      map(response =>{
        try {
          const parsedResult = JSON.parse(response);
          return parsedResult;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          throw error;
        }
      })
    )
  }

  fetchFile(id: number, fileFor: string): Observable<Blob> {
    return this.httpGetService(`${ApiPath.FETCH_FILE}?id=${id}&fileFor=${fileFor}`, this.headers, undefined, this.blobResponseType )
  }
}