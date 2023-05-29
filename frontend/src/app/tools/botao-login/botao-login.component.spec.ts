import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLoginComponent } from './botao-login.component';

describe('BotaoLoginComponent', () => {
  let component: BotaoLoginComponent;
  let fixture: ComponentFixture<BotaoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
