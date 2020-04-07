import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adquired-skills',
  templateUrl: './adquired-skills.component.html',
  styleUrls: ['./adquired-skills.component.scss']
})
export class AdquiredSkillsComponent implements OnInit{

  @Input('levels') levels: any; // #FIXME: Crear la clase Level
  // idArea;
  idLvl;
  
  constructor( private actRoute: ActivatedRoute ) { 
    // this.idArea = this.actRoute.snapshot.params.id;
    this.idLvl = this.actRoute.snapshot.params.idLvl;
  }

  ngOnInit(): void {
    let lastId = this.idLvl;
    this.actRoute.params.subscribe( params => {
      $('#ADL-'+lastId).attr('hidden',"true");
      $('#ADL-'+params.idLvl).removeAttr('hidden');
      lastId = params.idLvl;
    });
  }

  

}
