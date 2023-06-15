import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormLoginComponent } from 'src/app/views/form-login/form-login.component';

@Component({
  selector: 'app-botao-login',
  templateUrl: './botao-login.component.html',
  styleUrls: ['./botao-login.component.scss'],
  providers: [DialogService]
})
export class BotaoLoginComponent implements OnInit, OnDestroy{

  ref!: DynamicDialogRef;

  items!: MenuItem[];
    
  show() {
    this.ref = this.dialogService.open(FormLoginComponent, {
        header: 'Entre e Aproveite!!',
        width: '37%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 1000,
        maximizable: false
    });
  }

  ngOnDestroy(): void {}
    


  ngOnInit(): void {
  }


  constructor(public dialogService: DialogService) {
    this.items = [
      {
          label: 'Cliente',
          icon: 'pi pi-circle',
          command: () => {
              this.show();
          }
      },
      {
          label: 'Funcionário',
          icon: 'pi pi-circle',
          command: () => {
              this.show();
          }
      },
      
  ];
  }


}
