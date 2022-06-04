import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  constructor(private httpClient: HttpClient) { }

  getProductos(title:string){
    title.replace(/\s/g, '%'); 
    return this.httpClient.get<any>("https://api.mercadolibre.com/sites/MCO/search?q=M"+title);
  }
}
