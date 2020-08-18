import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './components/home/home/home.component';
import { IncorrectPassModalComponent } from './components/modals/incorrect-pass-modal/incorrect-pass-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SignUpModalComponent } from './components/modals/sign-up-modal/sign-up-modal.component';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { NewEventModalComponent } from './components/modals/new-event-modal/new-event-modal.component';
import { EventsPageComponent } from './components/home/events-page/events-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncorrectPassModalComponent,
    SignUpModalComponent,
    NavBarComponent,
    NewEventModalComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    TextMaskModule,
    MatIconModule

  ],
  entryComponents: [
    LoginComponent,
    HomeComponent,
    IncorrectPassModalComponent,
    NewEventModalComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
