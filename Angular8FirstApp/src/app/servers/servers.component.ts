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
  serverCreationStatus = 'No server created yet !';
  serverName='Test Init Input';
  serverCreated=false;
  serversTab =["servers 1","server 2"];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer= true
    },2000);
   }

  ngOnInit() {
  }
 onCreateServer(){
   this.serverCreated=true;
   this.serversTab.push(this.serverName);
   this.serverCreationStatus='Server Created BIMMMMMM !!!'+ this.serverName;
 }
 onUpdateServerName(event: Event){
   console.log(event);
   this.serverName= (<HTMLInputElement>event.target).value;
 }
}
