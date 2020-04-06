import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
   selector: 'app-level-line',
   templateUrl: './level-line.component.html',
   styleUrls: ['./level-line.component.scss']
})
export class LevelLineComponent implements OnInit {

  @Input('levels') levels: any;
  
   constructor() { }

   ngOnInit(): void {

      $(document).ready(function () {
         $(".area-lvl-name").click(function () {
            // Modifico la clase que indica qué Nivel se está viendo
            $(".line-component-container .active").removeClass("active");
            $(this).parent().addClass("active");

            // Pido la modificación de los datos en el front #WIP
            const lvlId = $(this).attr('id');
            // Actualizo el listado de habilidades poseídas #TODO
            console.log(lvlId);

            // Actualizo el listado de habilidades por obtener #TODO

         });

      });

      this.prepareInfo();
   }

   prepareInfo(){
      // this.adquiredSkills = this.info.levels.find( as => as.position === 1);
      // this.nextLvlSkills = this.info.levels.find( as => as.position === 2);

  
      // this.titleInfo = {
      //   'universe': this.info.universe.name,
      //   'area': this.info.area.name
      // }
         
  
    }
  

}
