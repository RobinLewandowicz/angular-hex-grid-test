import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HexgridComponent } from './hexgrid/hexgrid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: HexgridComponent }])
  ],
  declarations: [AppComponent, HelloComponent, HexgridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
