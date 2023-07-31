import { Component, OnInit } from '@angular/core';
import { LoginService } from '@poke-project/api';

@Component({
  selector: 'poke-project-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  dados: any;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
   const offset = 0;
  }
}
