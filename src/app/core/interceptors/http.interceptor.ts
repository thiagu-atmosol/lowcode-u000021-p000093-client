import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor as MainHttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class HttpInterceptor implements MainHttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const lang: string = 'en';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('locale', lang);

    // avoiding the cloning twice.
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ headers });
      request = request.clone({ url: `${environment.apiUrl}${request.url}` });
    }
    else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json'
        },
      });
    }
    return next.handle(request);
  }
}
