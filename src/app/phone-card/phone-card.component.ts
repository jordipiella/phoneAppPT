import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.css']
})


export class PhoneCardComponent implements OnInit {
  @Input() phone: any;
  
  constructor() { }

  ngOnInit() {
  }

}
