import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  template: `
    <!-- 1. render the result of a Promise
            without async pipe -->
    <!--
    <div>
      <h4>Using Promise without "async pipe"</h4>
      <p>{{ promiseData }}</p>
    </div> -->

    <!-- 2. Promise with async pipe -->
    <!--
    <div>
      <h4>Using "async pipe" with Promise</h4>
      <p>{{ promise | async }}</p>
    </div> -->

    <!-- 3. Observale without async pipe -->
    <!--
    <div>
      <h4>Observale without async pipe </h4>
      <p>{{ observableData }}</p>
    </div> -->

    <!-- 4. Observale using async pipe -->
    <div>
      <h4>Observale using async pipe </h4>
      <p>{{ observable | async }}</p>
    </div>
  `
})

export class AsyncPipeComponent {
  // 1. render the result of a Promise
  // without async pipe
  /************************
  promiseData;

  constructor() {
    this.getPromise().then(data => this.promiseData = data);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise complete!') , 3000);
    });
  }
  *****************************************/
  // 2.  Promise with async pipe
  /********
  promise: Promise<string> | null = null;
  constructor() {
    this.promise = this.getPromise();
  }

  getPromise() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('Promise is complete') , 3000);
    });
  }
  ********************************************/

  // 3. Observale without async pipe
  /******************************
  observableData: number;
  // subscription property is going to hold
  // the observable itself
  subscription: Subscription;

  constructor() {
    this.subscription = this.getObservable()
                            .subscribe(data => this.observableData = data);
  }

  getObservable() {
    return interval(1000)
            .pipe(take(10))
            .pipe(map(n => n * n));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  **************************************/
  // 4. Observale using async pipe
  observable: Observable<number>;

  constructor() {
    this.observable = this.getObservable();
  }

  getObservable() {
    return interval(1000)
            .pipe(take(10))
            .pipe(map(n => n * n));
  }

}
