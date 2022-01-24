import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  timerId: any;
  hrHand: any;
  minHand: any;
  secHand: any;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  date!: Date;
  name = 'Angular 5';
  send_date = new Date();
  formattedDate: any;
  value: Date = new Date();

  constructor() {
    this.send_date.setMonth(this.send_date.getMonth() + 8);
    this.formattedDate = this.send_date.toISOString().slice(0, 10);
    console.log(this.formattedDate);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.timerId = this.getTime()
  }

  animateAnalogClock() {
    this.hrHand = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` };

    this.minHand = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };

    this.secHand = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };
  }

  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}
