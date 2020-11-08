import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAsociacionComponent } from './components/Asociacion/add-asociacion/add-asociacion.component';
import { ListarAsociacionComponent } from './components/Asociacion/listar-asociacion/listar-asociacion.component';
import { UpdateAsociacionComponent } from './components/Asociacion/update-asociacion/update-asociacion.component';

const routes: Routes = [
  {path:'listar',component:ListarAsociacionComponent},
  { path: "asociacion/add", component: AddAsociacionComponent },
  { path: "editar/:id", component: UpdateAsociacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
