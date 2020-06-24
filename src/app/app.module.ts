import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/create-prescription/navbar/navbar.component';
import { CreatePrescriptionComponent } from './pages/create-prescription/create-prescription.component';
import { FormComponent } from './pages/create-prescription/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePrescriptionComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
