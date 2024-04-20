import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InjectableService } from 'injectable';

@Component({
  selector: 'placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
})
export class PlaceholderComponent {
  public readonly injectable = inject(InjectableService);

  public log(message: string) {
    this.injectable.log(message);
  }
}
