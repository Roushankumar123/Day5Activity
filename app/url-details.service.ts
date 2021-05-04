import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlDetailsService {

  constructor(private http:HttpClient) { }
  userdata():Observable<any>{
return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
    
  }
  
 

