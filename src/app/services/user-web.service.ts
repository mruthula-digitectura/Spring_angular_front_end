import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserDetailsTable } from "src/app/interface/user-details-table"
@Injectable()
export class UserWebService {

    constructor(private httpClient: HttpClient) { }

    serverUrl: string = "http://localhost:8080/api/"

    get(url: string) {
        return this.httpClient.get(this.serverUrl + url);
    }

    post(url: string, data: any): Observable<any> {
        console.log(data);
        return this.httpClient.post(this.serverUrl + url, data);
    }

    put(url: string, data: any): Observable<any> {
        return this.httpClient.put(this.serverUrl + url, data);
    }

      delete(url: string, data: any): Observable<any> {
          return this.httpClient.delete(this.serverUrl + url,data);
      }
}
