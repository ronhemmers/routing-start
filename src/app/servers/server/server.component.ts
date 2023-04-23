import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'] // encoded in the URL, eg: '1'.. needs to be converted to a number.
    this.server = this.serversService.getServer(id);

    // if you want to react to any changes afterwards...
    // you need to subscribe to the params Observable.
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);  // convert the string to a number here as well.
      }
    );
  }

}
