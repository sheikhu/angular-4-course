import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverName;

  servers = [
    /*{
      id: this.uuid(),
      name: 'Alpha',
    },
    {
      id: this.uuid(),
      name: 'Omega',
    }*/
  ];

  constructor(private serverService: ServerService) {

  }

  ngOnInit() {
    this.serverService.fetchServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
        );
  }
  onAdd(name: string) {
    this.servers.push(
      {
        id: this.uuid(),
        name: name,
      });
    this.serverName = '';
  }

  onPush() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => {
        console.log(response);
      },
        (error) => {
          console.log(error);
        }
        );
  }

  uuid() {
    return Math.round(Math.random() * 1000);
  }
}
