import { Injectable, Type } from '@angular/core';
import{Asociacion} from '../models/asociacion';
import{Observable, Subscription,of} from 'rxjs';
import{HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AsociacionService {

    private  HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    private asociacionUrl:string = 'http://localhost:8080/asociaciones';
    constructor(private  http : HttpClient) { }
  getAsociaciones():Observable<Asociacion[]>{
    return this.http.get<Asociacion[]>(this.asociacionUrl+'/all');
  }
  getAsociacion(id:number):Observable<Asociacion[]> {
    return this.http.get<Asociacion[]>(this.asociacionUrl+'/'+id);
  }
  addAsociacion(asociacion: Asociacion): Observable<number>{
    return this.http.post<number>(this.asociacionUrl+"/add", asociacion, {headers:this.HttpHeaders});
  }
  deleteAsociacion(asociacion: Asociacion) {
    return this.http.delete(this.asociacionUrl+'/delete/'+asociacion.id_asociacion);
  }

  updateAsociacion(asociacion: Asociacion):Observable<number> {
    return this.http.put<number>(`${this.asociacionUrl}/update/${asociacion.id_asociacion}`, asociacion,{headers:this.HttpHeaders});
  }
  updateLogica(id:number):Observable<number> {
    return this.http.put<number>(`${this.asociacionUrl}/update/logica/${id}`,{headers:this.HttpHeaders});
  }
}
