import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-level-line',
   templateUrl: './level-line.component.html',
   styleUrls: ['./level-line.component.scss']
})
export class LevelLineComponent implements OnInit {

  @Input('levels') levels: any;
  idUniverse;
  idArea;
  idLevel;
  
   constructor( private actRoute: ActivatedRoute) {
      this.idUniverse =  this.actRoute.snapshot.params.idUniverse;
      this.idArea =  this.actRoute.snapshot.params.idArea;
      this.idLevel =  this.actRoute.snapshot.params.idLevel;
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

}
