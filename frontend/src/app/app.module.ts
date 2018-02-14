import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "./shared/services/data.service";
import {HttpClientModule} from "@angular/common/http";
import {TodoComponent} from './todo/todo.component';
import {ServiceWorkerModule} from "@angular/service-worker";

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ServiceWorkerModule,
        HttpClientModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
