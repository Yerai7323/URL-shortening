import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UrlApiService {
  constructor(private http: HttpClient) { }
  
  getShorten(url : string): Observable<Response>{
    return this.http.get<Response>(`${environment.baseApi}/shorten?url=${url}`);
  }
}
