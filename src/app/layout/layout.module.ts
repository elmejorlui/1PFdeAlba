import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavService } from './side-nav.service';
import { LayoutComponent } from './layout.component';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { RelojComponent } from './reloj/reloj.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MenuComponent,
        ToolbarComponent,
        LayoutComponent,
        RelojComponent
    ],
    imports: [
        MatToolbarModule,
        CommonModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        AlumnosModule,
    ],
    exports: [
        MenuComponent,
        ToolbarComponent,
        LayoutComponent,
    ],
    providers: [
        SideNavService,
    ]
})
export class LayoutModule { }
