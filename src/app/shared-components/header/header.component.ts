import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TranslocoDirective,
  TranslocoPipe,
  TranslocoService,
} from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoDirective, TranslocoPipe, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private _transLoco: TranslocoService) {}
  selectedLanguage = 'en';

  onLangChange(event: any) {
    this.selectedLanguage = event.target.value;
    this._transLoco.setActiveLang(this.selectedLanguage);
  }
}
