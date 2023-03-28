import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comand } from "../interfaces/comand.interfaces";


@Injectable ({
  providedIn: 'root'
})

export class ComandService {

  private urlEndPoint:string = 'http://localhost:8080/api/commands';

  constructor(private http: HttpClient) {}


  //NOTA: aca voy a poner todos los metodos para bucar el comando

  searchComand(data: string):Observable<Comand[]> {
    return this.http.get<Comand[]>(this.urlEndPoint)
  }


  //Busca por id
  getComandforId(id: string): Observable<Comand> {
    const url = `${this.urlEndPoint}/${id}`;
    return this.http.get<Comand>(url);
  }
}
