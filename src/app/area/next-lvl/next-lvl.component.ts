import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-next-lvl',
  templateUrl: './next-lvl.component.html',
  styleUrls: ['./next-lvl.component.scss']
})
export class NextLvlComponent implements OnInit {

  @Input('nextLevelSkills') skills: Skill[] | 'top';
  idArea;
  idLevel;
  idActualSkill;
  nextLevel;
  idNextLevel;
  
  constructor( private actRoute: ActivatedRoute  ) {
    this.idArea = Number(this.actRoute.snapshot.params.idArea);
    this.idLevel =  Number(this.actRoute.snapshot.params.idLevel);
    this.idNextLevel = this.idLevel + 1;
    console.log(this.skills);
  }

  ngOnInit(): void {
  }
}

