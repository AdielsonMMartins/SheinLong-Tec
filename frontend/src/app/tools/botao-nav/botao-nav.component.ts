import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-botao-nav',
  templateUrl: './botao-nav.component.html',
  styleUrls: ['./botao-nav.component.scss']
})
export class BotaoNavComponent {

  items!: MenuItem[];
    
  ngOnInit() {
      this.items = [
          {
              label: 'Celulares',
              icon: 'pi pi-fw pi-circle',
              
          },
          {
              label: 'SmartWatches',
              icon: 'pi pi-fw pi-circle',
              
          },
          {
              label: 'Fones Bluetooth',
              icon: 'pi pi-fw pi-circle',
              
          },
          {
              label: 'Diversos',
              icon: 'pi pi-fw pi-circle',
              
          }
      ];
  }
}

