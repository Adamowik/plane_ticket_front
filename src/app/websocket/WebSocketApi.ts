import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import { ChoosePlaceComponent } from '../choose-place/choose-place.component';
import { FlightSearchService } from '../services/flight-search.service';
import { Seats } from '../entities';
import { HttpService } from '../services/http-service';
import { NONE_TYPE } from '@angular/compiler';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
declare var SockJS;
declare var Stomp;

export class WebSocketAPI {
  [x: string]: any;
  
    constructor() {
        this.initializeWebSocketConnection();
      }

    // constructor(public flightSearchService: FlightSearchService){
    //   this.initializeWebSocketConnection();
    // }

    
      public stompClient;
      public msg = [];initializeWebSocketConnection() {
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
              //service.setOccuped(KliknieteMiejsce)
            //  window.location.reload(false);
            }
          });
        });
      }

    //    returnClickedSeat(): Seats{
    //     const serverUrl = 'http://localhost:8080/socket';
    //     const ws = new SockJS(serverUrl);
    //     this.stompClient = Stomp.over(ws);
    //     const that = this;
    //     this.stompClient.connect({}, function(frame) {
    //       that.stompClient.subscribe('/message', (message) => {
    //         if (message.body) {
    //           that.msg.push(message.body);
    //           return message.body;
    //         }
    //         return null;
    //   } return null;
    // }return null;}
      
      sendMessage(message) {
        this.stompClient.send('/app/send/message' , {}, message);
        console.log('Wysłano');
      }
    
}