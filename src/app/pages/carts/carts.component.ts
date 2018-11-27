import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  // Inject HttpClient into application   
  constructor(private http: HttpClient) { 

  }

  configUrl = "https://netwealthonlinetests.azurewebsites.net/clients/{id}";

  getData() {
    return this.http.get(this.configUrl);
  }

  showConfig() {
    this.getData()
    .subscribe((data) => {
      console.log(data)
    });
  }

  ngOnInit() {
    this.showConfig();
  }

}
