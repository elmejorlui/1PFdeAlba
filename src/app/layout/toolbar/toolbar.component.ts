import { Component } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private sidenav: SideNavService) {

  }

  ngOnInit() {

  }

  clickMenu() {
    this.sidenav.toggle();
  }
}
