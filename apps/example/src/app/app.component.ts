import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'example-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>ExampleAppComponent</span>
    </mat-toolbar>

    <div id="helloWorld" class="p-4">Hello World</div>

    <router-outlet></router-outlet>
  `,
})
export class ExampleAppComponent {}
