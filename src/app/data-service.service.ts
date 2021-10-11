import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }
  login(username: string, password: string) {
    return this.http.post("https://api.bime.moein98.ir/api/login", { username: username, password: password })
  }
}
