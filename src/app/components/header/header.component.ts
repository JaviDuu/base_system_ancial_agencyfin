import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
