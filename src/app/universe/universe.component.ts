import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import { Universe } from '../models/universe';
import { UniverseService } from './universe.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Skill } from '../models/skill';
import { Level } from '../models/level';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.scss']
})
export class UniverseComponent implements OnInit, OnDestroy {

  constructor(private universeService: UniverseService, private actRoute: ActivatedRoute) { }

  fullUniverse: Universe;
  private subs = new SubSink();

  adquiredSkills: Skill[];
  nextLevelSkills: Skill[] | 'top';
  levelLineInfo;
  titleInfo: any;
  orderedLevels: any;

  ngOnInit(): void {
    const idLevel = +this.actRoute.snapshot.params.idLevel;
    const idArea = +this.actRoute.snapshot.params.idArea;
    const universeId = +this.actRoute.snapshot.params.idUniverse; // #TODO: Checker para cada uno de estos atributos (así podemos avisar si falla, qué falló)

    this.subs.add(this.universeService.getUniverseById(universeId).subscribe(
      data => {
        this.fullUniverse = data;

        this.levelLineInfo = this.sortLevels(data.levels);

        this.titleInfo = {
          'universeName': data.name,
          'areaName': (data.areas.find(area => area.id === idArea)).name
        };
      }
    ));

    let lastId = idLevel;
    this.subs.add(this.actRoute.params.subscribe(
      params => {
        this.adquiredSkills = this.getActualLevelSkills(this.fullUniverse, params.idLevel);
        this.nextLevelSkills = this.getNextLevelSkills(this.fullUniverse, params.idLevel);
      }
    ));

  }

  getNextLevelSkills(universe: Universe, idActualLevel) {
    const actualLevel: Level = universe.levels.find(level => level.id === +idActualLevel);
    const nextLevel: Level = universe.levels.find(level => level.position === (+actualLevel.position + 1));
    let nextLevelSkills;
    if (nextLevel) {
      nextLevelSkills = nextLevel.skills;
    }
    else {
      nextLevelSkills = 'top';
    }
    return nextLevelSkills;
  }

  getActualLevelSkills(universe: Universe, idLevel: number | string) {
    const actualLevel: Level = universe.levels.find(level => level.id === +idLevel);
    return actualLevel.skills;
  }

  sortLevels(levels) {
    const orderedLevels = levels.sort(function (a, b) {
      return a.position > b.position ? -1 : a.position < b.position ? 1 : 0
    });

    return orderedLevels.map(function (sk) {
      return {
        'id': sk['id'],
        'name': sk['name'],
        'description': sk['description'],
        'position': sk['position']
      }
    });

  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
