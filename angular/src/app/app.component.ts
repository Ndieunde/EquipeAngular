import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <div class="panel panel-danger">
      <div class="panel-heading">
        TITLE HERE
      </div>
      <div 
        class="panel-body" 
        *ngIf="opened"> BODY HERE </div>
    </div>
  </div>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
