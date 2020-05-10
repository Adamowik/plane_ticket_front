import { TicketComponent } from './ticket/ticket.component';
import { LoginSecurityComponent } from './login-security/login.security.component';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { GuestViewPlacesComponent } from './guest-view-places/guest-view-places.component';
import { ChoosePlaceComponent } from './choose-place/choose-place.component';
import { FlightSearchingComponent } from './flight-searching/flight-searching.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
  path: 'search',
  component: FlightSearchingComponent,
  children: [
    {
      path: 'results',
      component: FlightSearchResultComponent
    }
  ]
},
{
  path: 'guestview',
  component: GuestViewPlacesComponent
},
{
  path: 'chooseplace',
  component: ChoosePlaceComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
