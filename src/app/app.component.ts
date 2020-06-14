import { HttpService } from './services/http-service';
import { UserSecurityService } from './services/user.security.service';
import { FlightSearchService } from './services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
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
  constructor(private tokenStorage: TokenStorageService, public flightSearchService: FlightSearchService,
     public userService: UserSecurityService, private httpService: HttpService) { }
  ngOnInit() {

    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });

      this.httpService.getUserByLogin(this.tokenStorage.getUsername()).subscribe((user) =>
      this.userService.user = user);
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
