import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numbersObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // const myNum = Observable.interval(1000);
    // myNum.subcribe(
    //   (number: number) => 
    //   {
    //     console.log(number)
    //   }
    // );
  }

}
