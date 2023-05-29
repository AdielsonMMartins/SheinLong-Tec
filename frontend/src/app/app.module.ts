import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TieredMenuModule } from 'primeng/tieredmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';
import { BotaoNavComponent } from './tools/botao-nav/botao-nav.component';
import { BotaoLoginComponent } from './tools/botao-login/botao-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BotaoNavComponent,
    BotaoLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    TieredMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
