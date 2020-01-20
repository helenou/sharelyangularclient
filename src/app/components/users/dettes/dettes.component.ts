import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettes',
  templateUrl: './dettes.component.html',
  styleUrls: ['./dettes.component.css']
})
export class DettesComponent implements OnInit {
  dettes: any;

  constructor() { }

  ngOnInit() {
  }

  demander(det: any) {

  }
}
