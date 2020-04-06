import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-level-line',
   templateUrl: './level-line.component.html',
   styleUrls: ['./level-line.component.scss']
})
export class LevelLineComponent implements OnInit {

  @Input('levels') levels: any;
  idLevel;
  
   constructor( private actRoute: ActivatedRoute) {
      this.idLevel =  this.actRoute.snapshot.params.idLvl;
   }

   ngOnInit(): void {

      $(document).ready(function () {
         $(".area-lvl-name").click(function () {
            // Modifico la clase que indica qué Nivel se está viendo
            $(".line-component-container .active").removeClass("active");
            $(this).parent().addClass("active");
         });

      });

   }

   prepareInfo(){
//      $("#al"+idLvl).parent().addClass('active');
      // this.adquiredSkills = this.info.levels.find( as => as.position === 1);
      // this.nextLvlSkills = this.info.levels.find( as => as.position === 2);

  
      // this.titleInfo = {
      //   'universe': this.info.universe.name,
      //   'area': this.info.area.name
      // }
         
  
    }
  

}
