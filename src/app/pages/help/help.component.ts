import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  // Two way Data-Binding 
  helpSearch: string = "";

  constructor() { }

  ngOnInit() {
  }

  profit = 0;

  
  


  // Declaraing the array name
  trade: Array<number> = [];


}
