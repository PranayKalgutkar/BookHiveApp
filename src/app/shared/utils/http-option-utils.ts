import { HttpHeaders, HttpParams } from "@angular/common/http";

export class HttpOptionUtils {
    body?: any;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: any;
    param?: HttpParams | {
        [param: string]: string | string[] | any;
    };
    reportProgress?: boolean;
    responseType?: any;
    withCredentials?: boolean;
}
