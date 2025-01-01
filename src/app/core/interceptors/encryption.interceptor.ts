import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { EncryptionService } from '../services/encryption.service';
// import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EncryptionInterceptor implements HttpInterceptor {

  constructor(private encryptionService: EncryptionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log('Intercepting request', req);

    // Encrypt the request body if it exists
    if (req.body) {
      const encryptedBody = this.encryptionService.encrypt(req.body);
      const encryptedReq = req.clone({ body: encryptedBody });
      return next.handle(encryptedReq);
    }

    // If no body exists, just pass the original request
    return next.handle(req);
  }
}

// export const encryptionInterceptor: HttpInterceptorFn = (req, next) => {
//   // Inject EncryptionService
//   //console.log('Intercepting request', req);
//   const encryptionService = inject(EncryptionService);

//   // Encrypt the request body if it exists
//   if (req.body) {
//     const encryptedBody = encryptionService.encrypt(req.body);
//     const encryptedReq = req.clone({ body: encryptedBody });
//     return next(encryptedReq);
//   }

//   // If no body exists, just pass the original request
//   return next(req);
// };