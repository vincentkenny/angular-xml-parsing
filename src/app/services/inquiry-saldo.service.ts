import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InquirySaldoService {

  constructor(private http:HttpClient) { }

  public getData(body){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/xml', //<- To SEND XML
        'Accept':  'application/xml',       //<- To ask for XML
        'Response-Type': 'xml'             //<- b/c Angular understands text
      })
    };
    return this.http.post("http://localhost:8080",body, {responseType : 'text'});
  }
}
