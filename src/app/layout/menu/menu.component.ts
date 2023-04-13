import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  constructor(private sideNavService: SideNavService) {

  }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  }
}
