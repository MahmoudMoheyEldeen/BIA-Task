import { Component } from '@angular/core';
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';
@Component({
  selector: 'app-business-impact-analysis',
  standalone: true,
  imports: [TranslocoDirective, TranslocoDirective, TranslocoModule],
  templateUrl: './business-impact-analysis.component.html',
  styleUrl: './business-impact-analysis.component.scss',
})
export class BusinessImpactAnalysisComponent {}
