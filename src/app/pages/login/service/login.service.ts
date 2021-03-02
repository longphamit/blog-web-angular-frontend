import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Account} from "../../admin/model/account"
const BASE_URL="http://localhost:4300/api"
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient:HttpClient) { }
  login(account:Account):Observable<any>{
    const header={'content-type':'application/json'}
    const jsonBody=JSON.stringify(account);
    return this.httpClient.post<any>(`${BASE_URL}/user/signin`,jsonBody,{"headers":header,observe:'response'});
  }
}
