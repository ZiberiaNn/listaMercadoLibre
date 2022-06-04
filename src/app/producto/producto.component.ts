import { Component, OnInit } from '@angular/core';
import { ListarService } from '../listar.service';
import { Producto } from './producto.order';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  title:string='';
  productos:Producto[]=[];
  constructor(private listarService: ListarService) { }

  ngOnInit(): void {
  }

  search(title:string){
    this.listarService.getProductos(title).subscribe(
      response => {
        this.productos=response.results;
        console.log(this.productos)
      });
  }


}
