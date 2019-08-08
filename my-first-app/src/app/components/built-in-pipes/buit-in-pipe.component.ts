import { Component } from '@angular/core';

@Component({
  selector: 'app-buit-in-pipe',
  template: `
    <div class="currency-pipe">
      <h2>1-1. CurrencyPipe</h2>
      <h4>{{ 1234.56 | currency }}</h4>
      <!-- the first para: currencyCode -->
      <h4>{{ 1234.56 | currency: 'EUR' }}</h4>
      <h4>{{ 1234.56 | currency: 'GBP' }}</h4>
      <hr/>

      <!-- the second para: display = 'symbol' -->
      <h4>{{ 1234.56 | currency: 'EUR': 'symbol' }}</h4>
      <h4>{{ 1234.56 | currency: 'EUR': 'code' }}</h4>
      <h4>{{ 1234.56 | currency: 'CAD': 'symbol-narrow' }}</h4>
      <hr/>

      <!-- the third para: digitsInfo (rounded to) -->
      <h4>{{ 34.5785 | currency: 'EUR': 'symbol': '4.1-2' }}</h4>
    </div>
    <hr/>

    <div class="date-pipe">
      <h4> {{ date }} </h4>

      <!-- the first para: currencyCode -->
      <h4>{{date | date: 'short'}}  </h4>
      <h4>{{date | date: 'shortTime'}}  </h4>
      <h4>{{date | date: 'dd/MM/y'}}  </h4>
      <h4>{{date | date: 'h:mm a z'}}  </h4>
    </div>
    <hr/>

    <div class="decimal-pipe">
      <h4> {{ 2.1782 | number: '2.1-2' }} </h4>
      <h4> {{ 2.1782 | number: '3.3-5' }} </h4>
      <h4> {{ -2.5 | number: '1.0-0' }} </h4>
    </div>

    <hr>
    <div class="decimal-pipe">
      <h4> {{ info }} </h4>
      <h4> {{ info | json }} </h4>
    </div>

    <hr>
    <div class="lowercase-pipe">
      <h4>{{ myName | lowercase }}</h4>
    </div>
    <div class="uppercase-pipe">
      <h4>{{ myName | uppercase }}</h4>
    </div>
    <div class="titlecase-pipe">
      <h4>{{ dname | titlecase }}</h4>
    </div>

    <hr>
    <div class="slice-pipe">
      <h4>{{ myName | slice: 1: 6 }}</h4>
      <h4>{{ arr | slice: 0: 3 }}</h4>

      <ul>
        <li *ngFor="let a of arr | slice: 1: 3">{{a}}</li>
      </ul>
    </div>

    <hr>
    <div class="percent-pipe">
      <h4>{{ 34.126 | percent }}</h4>
      <h4>{{ 0.259 | percent }}</h4>
      <h4>{{ 3.147 | percent: '2.1-2' }}</h4>

    </div>
  `
})

export class BuiltInPipeComponent {
  public date = new Date();
  public info = {
    fname: 'Trong',
    surname: 'Ngo'
  };
  myName = 'Trong Ngo';
  dname = 'trong ngo';

  arr = [1, 2, 3, 4, 5];
}
