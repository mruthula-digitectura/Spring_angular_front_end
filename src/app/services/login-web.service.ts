import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { LogInDetailsTable } from 'src/app/interface/log-in-details-table';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class LoginWebService {

  constructor(private httpClient: HttpClient) { }

  serverUrl: string = "http://localhost:8080/api/"

  get(url: string): Observable<any> {
      return this.httpClient.get(this.serverUrl + url);
  }

  
}
