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
  idNextLevel;

  constructor( private actRoute: ActivatedRoute  ) {
    this.idArea = Number(this.actRoute.snapshot.params.id);
    this.idLvl =  Number(this.actRoute.snapshot.params.idLvl);
    this.idNextLevel = this.idLvl + 1;
  }

  ngOnInit(): void {
/*    let position = this.levels.find( lvl => lvl.id == this.idLvl).position;
    position++;
    this.nextLevel = this.levels.find( lvl => lvl.position == position);
    console.log(this.nextLevel);

    const maxLvl = this.levels.lenght;
    */
    let lastId = this.idLvl;

    this.actRoute.params.subscribe( params => {

      const toShow = Number(params.idLvl) + 1;

      $('#NL-'+lastId).attr('hidden',"true");
      $('#NL-'+toShow).removeAttr('hidden');
      lastId = toShow;
    });

  }
}

