import { ProductosService } from './../../main-service/product-service/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoId: number;
  producto: any

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {
    this.productoId = NaN;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id') == null){
        this.productoId = NaN;
      }else{
        this.productoId = parseInt(params.get('id') ?? '');
        var asda: number = Number(params.get('id'));
      }
    });

    if(isNaN(this.productoId)){
      //Mostrar pantalla de error 404
    }

    this.productosService.buscarProducto(this.productoId).subscribe({
      next: (producto: any) => {
        this.producto = producto;
      },
      error: (error) => {
        //Mostrar pantalla de error 404
      }
    })
  }

}
