import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 /**
  * Selecto as an attribute
  * selector: '[app-servers]',
  */
 /** 
  * Selecto as a class
  * selector: '.app-servers',
 */
  templateUrl: './servers.component.html',
 // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(()=> {
      this.allowNewServer= true
    },2000);
   }

  ngOnInit() {
  }
 
}
