import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DecryptionService } from '../services/decryption.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DecryptionInterceptor implements HttpInterceptor {

  constructor(private decryptionService: DecryptionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    ////console.log("Intercepting request:", req);

    return next.handle(req).pipe(
      map((event) => {
        // Log the event after it is received
        ////console.log("Received event:", event);

        let processedEvent = event;

        // Process only HttpResponse events
        if (event instanceof HttpResponse) {
          //console.log("Processing HttpResponse:", event);

          if (event.body) {
            try {
              // Decrypt the body
              const decryptedBody = this.decryptionService.decrypt(event.body);
              //console.log("Decrypted body:", decryptedBody);

              // Clone the event with the decrypted body
              processedEvent = event.clone({ body: decryptedBody });
            } catch (error) {
              console.error("Decryption failed:", error);
            }
          } else {
            //console.log("No body to decrypt.");
          }
        } else {
          //console.log("Event is not an HttpResponse.");
        }

        return processedEvent; // Return the processed or original event
      })
    );
  }
}