import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppStateService } from './app-state.service';
import { LoadingAppService } from './loading-app.service';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  constructor(private appStatus : AppStateService , private isLoadingService : LoadingAppService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.isLoadingService.StartLoading();

    let req = request.clone({
      headers : request.headers.set('Authorization' , 'Bearer ' )
    });

    return next.handle(req).pipe(
      finalize(() => {
       // this.appStatus.productState.status = 'LOADED';
       this.isLoadingService.StopLoading();
      })
    );
  }
}
