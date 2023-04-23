import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes =  [
  { path: '', component: HomeComponent },           // localhost:4200/ (empty path)
  { path: 'users', component: UsersComponent },     // localhost:4200/users
  { path: 'users/:id/:name', component: UserComponent },  // localhost:4200/user, a dynamic path using :id
  { path: 'servers', component: ServersComponent },  // localhost:4200/servers
  { path: 'servers/:id/edit', component: EditServerComponent }  // localhost:4200/servers/:id/edit
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)  // routes are now registered
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
