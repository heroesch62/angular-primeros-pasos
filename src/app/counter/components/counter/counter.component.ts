import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',

  template:`

  <h3>Counter: {{ counter }}</h3>
<button (click)="decreaseBy(1)">-1</button>
<button (click)="reset(0)">Reset</button>
<button (click)="increaseBy(1)">+1</button>
<hr>`
})

export class CounterComponent implements OnInit {
  constructor() { }

  public counter: number = 0;

  increaseBy(value: number):void
  {
    this.counter += value;
  }

  decreaseBy(value: number):void
  {
    this.counter -= value;
  }

  reset(value: number):void
  {
    this.counter = value;
  }


  ngOnInit() { }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>'
// })
// export class CounterComponent {

// }
