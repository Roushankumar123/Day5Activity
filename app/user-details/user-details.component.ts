import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UrlDetailsService } from '../url-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userdetals:any

  constructor(private urldetails:UrlDetailsService) { }

  ngOnInit(): void { 
    this.urldetails.userdata().
    subscribe(Info=>this.userdetals=Info)
   }

}
