import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl="https://localhost:44326/api/requests/getall"
  constructor(private httpClient:HttpClient) { }

  getRequests():Observable<ListResponseModel<Request>>{
    return this.httpClient.get<ListResponseModel<Request>>(this.apiUrl);

  }
}
