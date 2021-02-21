import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
const BASE_URL="http://localhost:4300/api"
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  
 
  getAccounts(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${BASE_URL}/admin/account/search`);
  }
  removeAccounts(_id:String):Observable<Account[]>{
    return this.httpClient.delete<Account[]>(`${BASE_URL}/admin/account/delete/${_id}`)
  }
}
