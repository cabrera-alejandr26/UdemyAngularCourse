import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';//Manually import the server component, it needs to be done in order for TypeScript can recognize where the server component is located.
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';

//Angular
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent, //TypeScript needs to find where to find this server component.
    WarningComponent, SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
