import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
