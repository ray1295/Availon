import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
 selector: 'app-footer',
 templateUrl: './footer.component.html',
//  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  countryPath:string = "./assets/images/england_logo.png"
  
  constructor() { }

  ngOnInit() {
  }

} 