import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { InjectableService } from 'injectable';
import { PlaceholderComponent } from 'placeholder';
@Component({
  selector: 'example-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, PlaceholderComponent],
  template: `
    <mat-toolbar color="primary">
      <span>ExampleAppComponent</span>
    </mat-toolbar>

    <div id="helloWorld" class="p-4">Hello World</div>

    <i id="icon" class="icon-[solar--check-circle-outline] px-6"></i>

    <placeholder />

    <router-outlet></router-outlet>
  `,
})
export class ExampleAppComponent {
  public readonly injectable = inject(InjectableService);

  public log(message: string) {
    this.injectable.log(message);
  }
}
