import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';
import { MainContentComponent } from './app/main-content/main-content.component';
import { ImageSliderComponent } from './app/image-slider/image-slider.component';
import { RolesComponent } from './app/roles/roles.component';
import { RoleComponent } from './app/roles/role/role.component';
import { AddressComponent } from './app/address/address.component';
import { FooterComponent } from './app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContentComponent,
    ImageSliderComponent,
    RolesComponent,
    RoleComponent,
    AddressComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
