import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

const components = [
  FooterComponent,
  SidebarComponent,
  HeaderComponent,
  NavbarComponent,
  FilterComponent
]

const material = [
  MatToolbarModule,
  MatCardModule,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    material,
    CommonModule
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
