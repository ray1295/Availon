import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '[app-root]',
  // Select component by attribute --> <div app-root> </div>
  // selector: '.app-root',
  //  Select component by class -->  <div class="app-root"></div>
  // Use back ticks [` html `] for multi line html code -> Inline Templating
  templateUrl: './app.component.html',
  // StyleUrl array can refrernce multiple external styles 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
