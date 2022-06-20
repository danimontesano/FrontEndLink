import { UserServiceService } from './../main-service/user-service/user-service.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewInit {

  usuario: any;

  constructor(
    private userService: UserServiceService/*,
    private cdr: ChangeDetectorRef*/
  ) {

  }

  ngOnInit(): void {
    this.userService.cambioSesion.subscribe((usuario: any) => {
      this.usuario = usuario;
      //this.cdr.detectChanges();
      console.log("asasas");
    })
    this.userService.notificarCambios();
  }

  ngAfterViewInit(): void {
  }

}
