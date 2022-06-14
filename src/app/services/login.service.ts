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

  public generateKey() {
    let key = ''
    const values = '0123456789'

    for (let i = 0; i < 5; i++) {
      key += values.charAt(Math.floor(Math.random() * values.length))
    }

    this.keys = [...this.keys, key]

    alert(`Your key is ${key}.`)
  }
}
