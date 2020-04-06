import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-next-lvl',
  templateUrl: './next-lvl.component.html',
  styleUrls: ['./next-lvl.component.scss']
})
export class NextLvlComponent implements OnInit {

  @Input('levels') levels: any; // #FIXME: Crear la clase Level
  idArea;
  idLvl;
  idActualSkill;
  nextLevel;

  constructor( private actRoute: ActivatedRoute  ) {
    this.idArea = this.actRoute.snapshot.params.id;
    this.idLvl =  this.actRoute.snapshot.params.idSkill;
  }

  ngOnInit(): void {
    let position = this.levels.find( lvl => lvl.id == this.idLvl).position;
    position++;
    this.nextLevel = this.levels.find( lvl => lvl.position == position);
    console.log(this.nextLevel);
  }
}

