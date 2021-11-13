import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
baseUrl=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<User> {
    return this.httpClient.post<User>(this.baseUrl+'register',user);
  }
}
