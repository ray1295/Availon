import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  // Properties -> Properties inside a component are only accessible inside that component.
  // Decorator: @Input() -> Gives property outside visibility and usage -> outside component binding to property selector can now access it.
  // Alias @Input('srvElement') -> Passing arg with property name as you'd want to have it accesssed from the outside.
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
