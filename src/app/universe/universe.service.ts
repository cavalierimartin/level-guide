import { Injectable } from '@angular/core';
import { UNIVERSES } from '../models/mock';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Universe } from '../models/universe';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {

  constructor() { }

  // Observación para lectores: Se elige pedir la info sólo por el universo, por la estructura de los datos

  getUniverseById(idUniverse: number){
    return this.getUniverses().pipe(
      map((universes: Universe[]) => universes.find( universe => universe.id === +idUniverse))
    );
  }

  getUniverses(){
    return of(UNIVERSES);
  }

}
