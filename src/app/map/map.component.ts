import { Component, OnInit } from '@angular/core';
import { PlaneCoordinates } from '../entities';
import { HttpService } from '../services/http-service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 52.256020;
  lng = 20.904750;
  iconUrl = '../assets/images/planelogo.png';
  planes: Array<PlaneCoordinates>;


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getCoordinates().subscribe(
      value => this.planes = value
    )
  }

  refreshClick() {
    this.http.getCoordinates().subscribe(
      value => this.planes = value
    )
  }

}
