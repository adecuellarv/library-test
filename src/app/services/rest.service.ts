import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor (private http: HttpClient) {}

  public get (url: string) {
    return this.http.get(url)
  }

  public postca (url: string, info: object){
    return this.http.post<any>(url, info);
  }
}
