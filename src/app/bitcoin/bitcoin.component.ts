import { Component, OnInit, OnChanges } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

import { BitcoinResponse } from '../models/BitcoinResponse';
@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
})
export class BitcoinComponent implements OnInit, OnChanges {
  bitcoin: BitcoinResponse = null;

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.getListValues();
    setInterval(() => {
      this.getListValues();
    }, 60000);
  }

  ngOnChanges() {
    this.getListValues();
  }

  getListValues() {
    this.bitcoinService.get().subscribe((res) => {
      this.bitcoin = res;
    });
  }
}
