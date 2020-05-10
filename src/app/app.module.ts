import { UserSecurityService } from './services/user.security.service';
import { FlightSearchService } from './services/flight-search.service';
import { HttpService } from './services/http-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule} from '@angular/material';
import { FlightSearchingComponent } from './flight-searching/flight-searching.component';
import { ChoosePlaceComponent } from './choose-place/choose-place.component';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { GuestViewPlacesComponent } from './guest-view-places/guest-view-places.component';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LoginSecurityComponent } from './login-security/login.security.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightSearchingComponent,
    ChoosePlaceComponent,
    GuestViewPlacesComponent,
    FlightSearchResultComponent,
    TicketsComponent,
    LoginSecurityComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    HttpService, MatDatepickerModule, MatNativeDateModule, FlightSearchService, DatePipe,
     UserSecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
