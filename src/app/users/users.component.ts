import { HttpService } from '../services/http-service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../entities';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
