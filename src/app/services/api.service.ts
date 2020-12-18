import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../common/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  api_url: string = 'http://127.0.0.1:8080'

  login(user: string): Observable<LoginResponse>{
    return this._http.post<LoginResponse>(`${this.api_url}/usuarios`, {
      user: user
    })
  }

}
