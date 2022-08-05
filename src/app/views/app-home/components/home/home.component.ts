import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { STATIC_INDICATORS } from './staticIndicators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  indicatorsList: any[] = [...STATIC_INDICATORS];
  constructor(private router: Router, private common: CommonService) {}

  ngOnInit(): void {}

  setIndicator(item: any, route: string) {
    this.common.indicator = null;
    this.common.indicator = { ...item };
    this.router.navigate(['/' + route]);
  }
}
