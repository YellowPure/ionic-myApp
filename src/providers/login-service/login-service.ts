import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor() {
    console.log('Hello LoginServiceProvider Provider');
  }


  getUserData() {
    // 已登录
    return {
      nickname: 'yellow',
      age: '',
      uid: 10000,
      sex: 'male',
    }
    // 未登录
    // return null;
  }
}
