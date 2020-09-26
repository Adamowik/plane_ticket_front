import { HttpClient } from '@angular/common/http';
import { Ticket } from './../entities';
import { TicketTransportModel } from './models/ticket-transport-model';
import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService, public dictionary: DictionaryService, private http: HttpClient) { }

  payuModel: any;
  ngOnInit() {
  }

  createPayment() {
    this.flightSearchService.addTickets();
    this.flightSearchService.makePlacesReserved();
    const singleTicket: Ticket = this.flightSearchService.tickets[0];
    const paymentModel: TicketTransportModel = {
      email: 'awozmol@gmail.com',
      phone: singleTicket.phonenumber.toString(),
      productInfo: singleTicket.ticketID.toString(),
      name: singleTicket.name,
      amount: singleTicket.ticketCost.toString()
    };

    return this.http.post<any>('http://localhost:8080/payment/paymentdetails', paymentModel).subscribe(
      data => {
      console.log(data);
      this.payuModel.txnid = data.txnId;
      this.payuModel.surl = data.sUrl;
      this.payuModel.furl = data.fUrl;
      this.payuModel.key = data.key;
      this.payuModel.hash = data.hash;
      this.payuModel.txnid = data.txnId;
      this.executePayuRequest(paymentModel);
      this.flightSearchService.clearArrays();
    }, error1 => {
        console.log(error1);
      });
  }

  private executePayuRequest(paymentModel: TicketTransportModel) {
    this.payuModel.firstName = paymentModel.name;
    this.payuModel.productInfo = paymentModel.productInfo;
    this.payuModel.amount = paymentModel.amount;
    this.payuModel.email = paymentModel.email;
    this.payuModel.phone = paymentModel.phone;

    let response: any;

    return this.http.post<any>('https://test.payu.in/_payment', this.payuModel).subscribe(result => {
      response = result;
      // OPEN URL HERE OR STH
    });
  }
}
