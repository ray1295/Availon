import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MappingService } from '../../../service/google-maps/mapping.service';

@Component({
 selector: 'app-footer',
 templateUrl: './footer.component.html',
//  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  countryPath:string = "./assets/images/england_logo.png"
  
  lat: string = '';
  lng: string = '';
  country: string = '';
  currency: string = '';
  location: Object;

  constructor(private map: MappingService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude; 
      this.lng = data.longitude;
      this.country = data.country_name;
      this.currency = data.currency; 
    })
  }

} 