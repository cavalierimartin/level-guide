import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adquired-skills',
  templateUrl: './adquired-skills.component.html',
  styleUrls: ['./adquired-skills.component.scss']
})
export class AdquiredSkillsComponent implements OnInit{

  @Input('levels') levels: any; // #FIXME: Crear la clase Level
  idArea;
  idActualSkill;
  //level;

  constructor( private actRoute: ActivatedRoute ) { 
    this.idArea = this.actRoute.snapshot.params.id;
    this.idActualSkill = this.actRoute.snapshot.params.idSkill;
  }

  ngOnInit(): void {
//    this.level = this.levels.find( lvl => lvl.id == this.idActualSkill);
    //console.log(this.level);
    
  }

  

}
