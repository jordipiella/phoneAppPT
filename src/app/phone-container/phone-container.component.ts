import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../services/phone-api.service';

@Component({
  selector: 'app-phone-container',
  templateUrl: './phone-container.component.html',
  styleUrls: ['./phone-container.component.css'],
  providers: [PhoneApiService]
})
export class PhoneContainerComponent implements OnInit {
  phones = [];

  constructor(private phoneApi: PhoneApiService) { }

  ngOnInit() {
    this.phoneApi.getList()
      .subscribe((phones) => {
        console.log(phones);
        this.phones = phones
      })
  }

}
