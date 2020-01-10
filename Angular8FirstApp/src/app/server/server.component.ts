import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: String = 'isOffline';

    constructor(){
        this.serverStatus=Math.random()<0.5 ? 'onLine': 'isOffline';
    }
    getServerStatus()
    {
        return this.serverStatus;
    }
    getColor(){
     return this.serverStatus ===   'onLine' ? 'green' :'red';
    }
}