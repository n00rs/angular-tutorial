import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServerService {

  constructor(private http: HttpClient) { }
  saveEmployee({ url = "", data = {} }) {
    return this.http.post(url, data);
  }
}
