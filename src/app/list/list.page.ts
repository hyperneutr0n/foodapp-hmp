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

  couponcode: string = "0000"
  strvalid: string = "Invalid"
  discount: number = 0

  couponcolor: string = "red"
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

  checkValid(): void {
    switch (this.couponcode) {
      case "1234":
        this.strvalid = "Valid";
        this.discount = 5;
        this.couponcolor = "green"
        break;
      case "5678":
        this.strvalid = "Valid";
        this.discount = 10;
        this.couponcolor = "green"
        break;
      default:
        this.strvalid = "Invalid";
        this.discount = 0;
        this.couponcolor = "red"
        break;
    }
  }

  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discount: 10
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
      discount: 15
    }
  ]
}