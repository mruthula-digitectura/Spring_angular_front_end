import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { GroupTable } from 'src/app/interface/group-table';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class GroupWebServiceService {

  constructor(private httpClient: HttpClient) { }

  serverUrl: string = "http://localhost:8080/api/"

  get(url: string){
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data: any): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: any): Observable<any> {
      return this.httpClient.put(this.serverUrl + url, data);
  }

  delete(url: string, data: any): Observable<any> {
      return this.httpClient.delete(this.serverUrl + url, { params: { groupId: data.groupId + "" } });
  }
}
