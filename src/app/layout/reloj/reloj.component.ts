import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeService, Time } from 'src/app/core/services/time.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent {
  horaActual$: Observable<string>;

  constructor(private timeService: TimeService) {
    this.horaActual$ = this.timeService.reloj;
 }
}
