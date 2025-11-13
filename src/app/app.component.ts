import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',

  //change to templateurl       
template: '<router-outlet></router-outlet>',
//  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet],
})
export class AppComponent {}
