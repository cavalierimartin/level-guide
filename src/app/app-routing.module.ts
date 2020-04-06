import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';


const routes: Routes = [
  { path: 'area/:id/:idLvl', component: AreaComponent },
  { path: 'area', component: AreaComponent},
  { path: '', redirectTo: '/area/1/1', pathMatch: 'full' },
//  { path: '**', component: PageNotFoundComponent } // #TODO: Hacer este componente;
//#TODO: Se puede contemplar que existan múltiples universos;
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
