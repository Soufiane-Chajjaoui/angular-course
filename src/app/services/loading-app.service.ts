import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingAppService {
  public isLoading$ = new Subject<boolean>();
  constructor() { }

  StopLoading() : void {
    this.isLoading$.next(false);
  }

  StartLoading() : void {
    this.isLoading$.next(true);
  }
}
