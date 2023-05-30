import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-botao-login',
  templateUrl: './botao-login.component.html',
  styleUrls: ['./botao-login.component.scss']
})
export class BotaoLoginComponent implements OnInit{

  items!: MenuItem[];
    
  ngOnInit() {
      this.items = [
          {
              label: 'Cliente',
              icon: 'pi pi-fw pi-circle',
              
          },
          {
              label: 'Funcionário',
              icon: 'pi pi-fw pi-circle',
              
          },
          
      ];
  }



}
