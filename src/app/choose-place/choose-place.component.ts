import { HttpService } from '../services/http-service';
import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import { WebSocketAPI } from '../websocket/WebSocketAPI';
import { UserSecurityService } from '../services/user.security.service';
import { Seats } from '../entities';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-choose-place',
  templateUrl: './choose-place.component.html',
  styleUrls: ['./choose-place.component.css']
})
export class ChoosePlaceComponent implements OnInit {

  
  
  ngOnInit() {
    
      }

      title = 'websocket-frontend';
      input = 'message';
      //chosenSeats: Array<Seats> = [];
      chosenSeats: [];
      seat: Seats;
      constructor(public flightSearchService: FlightSearchService, public httpService: HttpService, public dictionary: DictionaryService,private websocketapi: WebSocketAPI,public userService: UserSecurityService) {this.initializeWebSocketConnection();}
      
      // setChosenSeatsFromWebsocket(){
      //   this.flightSearchService.setSeatOccuped(this.websocketapi.returnClickedSeat);
      // }

      public stompClient;
      public msg = [];
      initializeWebSocketConnection() {
        const serverUrl = 'http://localhost:8080/socket';
        const ws = new SockJS(serverUrl);
        this.stompClient = Stomp.over(ws);
        const that = this;
        // tslint:disable-next-line:only-arrow-functions
        this.stompClient.connect({}, function(frame) {
          that.stompClient.subscribe('/message', (message) => {
            if (message.body) {
              that.msg.push(message.body);
              console.log('Odebrano');
              this.seat=JSON.parse(message.body);
              console.log("seat:");
              console.log(this.seat);
              this.chosenSeats = this.chosenSeats.push(this.seat);
              // Array.from(this.chosenSeats).forEach((seat) => {
              //   this.httpService.updateSeat(seat).subscribe();
              // });
            //  this.httpService.updateSeat(message).subscribe();
            console.log("chosenSeats:");
              console.log(this.chosenSeats); 
              console.log('przypisano');
              //service.setOccuped(KliknieteMiejsce)
            //  window.location.reload(false);
            }
          });
        });
      }
         
      // sendMessage() {
      //   if (this.input) {
      //     this.websocketapi.sendMessage(this.input);
      //     this.input = '';
      //     this.chosenSeats.forEach((seat) => {
      //       this.httpService.updateSeat(seat).subscribe();
      //     });
      //     //wyslij(KliknieteSiedzenie)
      // }
      // }
      sendMessage(seat) {
        const stringSeat = JSON.stringify(seat);
        this.stompClient.send('/app/send/message' , {}, stringSeat);
        console.log('SEND:');
        console.log(stringSeat);
        console.log('Wysłano');
      }

}
