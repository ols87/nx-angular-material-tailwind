import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'example-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  template: `
    <mat-toolbar>
      <div class="w-full max-w-screen-md mx-auto">Hello</div>
    </mat-toolbar>

    <div class="max-w-screen-md mx-auto pt-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat
        debitis quam ipsam ab tempore quidem cumque praesentium veniam mollitia
        voluptatibus, consectetur itaque temporibus reiciendis, neque quisquam
        molestiae omnis non.
      </p>

      <i class="icon-[solar--check-circle-outline] text-3xl mt-4"></i>
    </div>
  `,
})
export class AppComponent {}
