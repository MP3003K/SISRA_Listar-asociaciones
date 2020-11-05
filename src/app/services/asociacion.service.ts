import { Injectable, Type } from '@angular/core';
import{Asociacion} from '../models/asociacion';
import{Observable, Subscription,of} from 'rxjs';
import{HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AsociacionService {

    private  HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    private asociacionUrl:string = '/asociaciones/all';
    constructor(private  http : HttpClient) { }
    getAsociacion() : Observable<Asociacion[]>{
      return this.http.get<Asociacion[]>(this.asociacionUrl);
    
  }
}
