import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve our query parameters and fragment.
    // 1st approach... (not reactive.. will not work if changes)
    console.log("query params:")
    console.log(this.route.snapshot.queryParams);
    console.log("fragment:");
    console.log(this.route.snapshot.fragment);

    // 2nd approach (allows to react to changes); don't need to unsubscribe.
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
