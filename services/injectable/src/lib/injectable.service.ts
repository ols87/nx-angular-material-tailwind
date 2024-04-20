import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InjectableService {
  public log(message: string) {
    console.log(message);
  }
}
