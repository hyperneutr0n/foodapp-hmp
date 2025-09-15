import { Component, OnInit } from '@angular/core';

interface Product {
  Name: string,
  Date: Date,
  Price: number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {
  readonly today = new Date();

  currentDate = new Date();
  offset = 0;
  yesterdayLimit = false;
  tomorrowLimit = false;

  private readonly dateLimit = 5;

  product: Product = {
    Name: 'Iphone 14',
    Date: new Date(),
    Price: 14000000
  }
  quantity = 0;
  minLimit = true;
  maxLimit = false;
  private readonly qLimit = 10;

  constructor() { }

  ngOnInit() {
  }

  today_ind(): string {
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const day = dayNames[this.currentDate.getDay()];
    const date = this.currentDate.getDate();
    const month = monthNames[this.currentDate.getMonth()];
    const year = this.currentDate.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  goYesterday(): void {
    if (this.yesterdayLimit) {
      return;
    }
    
    this.offset--;
    this.updateDateAndLimits();
  }

  goTomorrow(): void {
    if (this.tomorrowLimit) {
      return;
    }
    
    this.offset++;
    this.updateDateAndLimits();
  }

  reset(): void {
    this.offset = 0;
    this.updateDateAndLimits();
  }

  addQuantity() {
    if (this.maxLimit) {
      return;
    }
    this.quantity++;
    this.updateQuantityLimits();
  }

  subtractQuantity() {
    if (this.minLimit) {
      return;
    }
    this.quantity--;
    this.updateQuantityLimits();
  }

  private updateDateAndLimits(): void {
    const newDate = new Date(this.today);
    newDate.setDate(this.today.getDate() + this.offset);
    this.currentDate = newDate;

    this.yesterdayLimit = this.offset <= -this.dateLimit
    this.tomorrowLimit = this.offset >= this.dateLimit
  }

  private updateQuantityLimits(): void {
    this.minLimit = this.quantity <= 0;
    this.maxLimit = this.quantity >= this.qLimit;
  }
}