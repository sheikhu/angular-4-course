import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class ServerService {

  ENDPOINT = 'https://sheikhu-02d.firebaseio.com/data.json';
  constructor(private http: Http) {
  }

  storeServers( servers: any[]):  Observable<any> {
    return this.http.put(this.ENDPOINT, servers);
  }

  fetchServers(): Observable<any> {
    return this.http.get(this.ENDPOINT)
      .map((response: Response) => {
        return response.json();
      }).catch(
        (error: Response) => Observable.throw('An error occurs !')
      );
  }
}
