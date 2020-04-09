import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniverseComponent } from './universe/universe.component';


const routes: Routes = [
  { path: 'universe/:idUniverse/:idArea/:idLevel', component: UniverseComponent },
  { path: '', redirectTo: '/universe/1/1/1', pathMatch: 'full' },
//  { path: '**', component: PageNotFoundComponent } // #TODO: Hacer este componente;
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
