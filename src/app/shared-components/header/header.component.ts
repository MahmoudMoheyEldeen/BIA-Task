import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoDirective, TranslocoPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
