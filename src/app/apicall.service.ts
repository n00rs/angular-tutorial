import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get<any>(url);
  }
  post({ url = "", body = {}, options = {} }) {
    return this.http.post<any>(url, body, options);
  }
  put({ url = "", body = {}, options = {} }) {
    return this.http.put<any>(url, body, options);
  }
  delete({ url = "", body = {}, options = {} }) {
    return this.http.delete<any>(url, options);
  }
}
