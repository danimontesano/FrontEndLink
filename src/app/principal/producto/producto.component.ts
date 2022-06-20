import { UserServiceService } from './../../main-service/user-service/user-service.service';
import { ProductosService } from './../../main-service/product-service/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoId: number;
  producto: any

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private userService: UserServiceService,
    private router: Router
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

  comprar(){
    var usuario: any = this.userService.obtenerUsuario();
    if(this.userService.obtenerUsuario() == null){
      this.router.navigate(['/', 'log-in'])
    }else{
      this.router.navigate(['/', 'carrito'])
    }
  }

}
