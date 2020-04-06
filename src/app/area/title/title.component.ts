import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  universe = {
    'id': 1,
    'name': 'Beereal'
  }
  area = {
    'id': 1,
    'name': 'Develop'
  }



  constructor() { }

  ngOnInit(): void {
  }

}
