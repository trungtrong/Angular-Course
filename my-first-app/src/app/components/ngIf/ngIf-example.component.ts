import { Component} from '@angular/core';

@Component({
  selector: 'app-ngif-example',
  template: `
    <!-- Example 1 -->
    <h2 *ngIf="false">
      Hello Ajinomoto
    </h2>

    <!-- Example 2 -->
    <h2 *ngIf="displayTitle">
      {{ title }}
    </h2>

    <!-- Example 3:  if / else-->
    <!--
    <h2 *ngIf="sayHello; else sayBye">
      Hello
    </h2>

    <ng-template #sayBye>
      <h2>Bye</h2>
    </ng-template> -->

    <!-- Example 4: if, then  /  else-->
    <div *ngIf="sayHello; then thenHello;  else elseBye"></div>

    <ng-template #thenHello>
      <h2>Hello T</h2>
    </ng-template>

    <ng-template #elseBye>
      <h2>Bye T</h2>
    </ng-template>
  `
})

export class NgIfExampleComponent {
  // Example 2:
  title = 'Coders-Tokyo';
  displayTitle = false;

  // Example 3/ 4:
  sayHello = true;
}
