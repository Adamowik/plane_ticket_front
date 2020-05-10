import { UserSecurityService } from './../services/user.security.service';
import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';

@Component ({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.css']
})
export class FlightSearchResultComponent implements OnInit {

  currentDate: Date;

  constructor(public flightSearchService: FlightSearchService, public userService: UserSecurityService) {
      this.currentDate = new Date();
    }

  ngOnInit() {
  }

  compareDates(): boolean {
    if (this.currentDate >= this.flightSearchService.dateDeparture) {
      return true;
    } else {
      return false;
    }
  }

}
