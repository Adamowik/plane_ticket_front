import { HttpService } from './services/http-service';
import { UserSecurityService } from './services/user.security.service';
import { FlightSearchService } from './services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { TmplAstElement } from '@angular/compiler';
import { Users } from './entities';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  city: string;
  temepature: number;

  info: any;
  private roles: string[];
  public authority: string;
  constructor(public flightSearchService: FlightSearchService,
     public userService: UserSecurityService, private httpService: HttpService) { }
  ngOnInit() {
    };
  

  logout() {
    window.location.reload();
  }

}
