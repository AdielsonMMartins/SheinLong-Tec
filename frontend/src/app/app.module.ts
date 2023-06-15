import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//primeng imports
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton'



import { AppComponent } from './app.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';
import { BotaoNavComponent } from './tools/botao-nav/botao-nav.component';
import { BotaoLoginComponent } from './tools/botao-login/botao-login.component';
import { FormLoginComponent } from './views/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BotaoNavComponent,
    BotaoLoginComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    TieredMenuModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    SplitButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
