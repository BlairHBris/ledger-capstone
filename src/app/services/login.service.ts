import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  keys: string[] = ['12345']

  constructor() {}

  public checkKeys(key: string) {
    if (this.keys.includes(key)) {
      return true
    }
    else {
      return false
    }
  }
}
