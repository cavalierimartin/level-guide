import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-adquired-skills',
  templateUrl: './adquired-skills.component.html',
  styleUrls: ['./adquired-skills.component.scss']
})
export class AdquiredSkillsComponent implements OnInit{

  @Input('adquiredSkills') skills: Skill[];
  idLevel;
  
  constructor( private actRoute: ActivatedRoute ) { 
    this.idLevel = this.actRoute.snapshot.params.idLevel;
  }

  ngOnInit(): void {
  }

}
