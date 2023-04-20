import { Component } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { TimeService } from 'src/app/core/services/time.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private sidenav: SideNavService) {

  }

  clickMenu() {
    this.sidenav.toggle();
  }
}
