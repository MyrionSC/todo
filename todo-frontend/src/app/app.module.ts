import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MyTableComponent } from './my-table/my-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MyTableComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
