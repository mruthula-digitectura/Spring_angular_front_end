import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { LightTable } from 'src/app/interface/light-table';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class WebService {

  constructor(private httpClient: HttpClient) { }

  serverUrl: string = "http://localhost:8080/api/"

  get(url: string): Observable<any> {
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data: LightTable): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: LightTable): Observable<any> {
      return this.httpClient.put(this.serverUrl + url, data);
  }

  delete(url: string, data: LightTable): Observable<any> {
      return this.httpClient.delete(this.serverUrl + url, { params: { light_id: data.light_id + "" } });
  }
}
