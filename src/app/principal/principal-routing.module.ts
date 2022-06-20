import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [{ path: '', component: PrincipalComponent, children:[
  { path: '', component: InicioComponent},
  { path: 'producto/:id', component: ProductoComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
