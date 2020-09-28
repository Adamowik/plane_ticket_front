import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 52.256020;
  lng = 20.904750;
  iconUrl = '../../assets/plane.png';
  coordinates: Coordinates;


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getCoordinates().subscribe(
      value => this.coordinates = value
    )
  }

  refreshClick() {
    this.http.getCoordinates().subscribe(
      value => this.coordinates = value
    )
  }

}
