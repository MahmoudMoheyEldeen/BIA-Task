import { Component } from '@angular/core';
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-business-impact-analysis',
  standalone: true,
  imports: [TranslocoDirective, TranslocoDirective, TranslocoModule],
  templateUrl: './business-impact-analysis.component.html',
  styleUrl: './business-impact-analysis.component.scss',
})
export class BusinessImpactAnalysisComponent {
  trySweetalert() {
    Swal.fire('SweetAlert2 is working!');
  }
}
