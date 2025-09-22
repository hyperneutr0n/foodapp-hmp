import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false
})
export class SettingPage implements OnInit {
  url: string = "https://www.picsum.photos/300/200";
  password: string = "";
  lengthCriteria: boolean = false;
  numberCriteria: boolean = false;
  specialCharCriteria: boolean = false

  constructor() { }

  ngOnInit() {
  }

  checkStrength() { 
    length = this.password.length;
    
    if (length > 6) {
      this.lengthCriteria = true;
    } else {
      this.lengthCriteria = false;
    }

    if (/\d/.test(this.password)) { 
      this.numberCriteria = true;
    } else {
      this.numberCriteria = false;
    }

    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.password)) { 
      this.specialCharCriteria = true;
    } else {
      this.specialCharCriteria = false;
    }
  }
}
