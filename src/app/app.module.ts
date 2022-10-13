import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { SliderContentComponent } from './component/slider-content/slider-content.component';
import { ModalConnectComponent } from './component/modal-connect/modal-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderContentComponent,
    ModalConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
