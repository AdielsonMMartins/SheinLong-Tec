import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoNavComponent } from './botao-nav.component';

describe('BotaoNavComponent', () => {
  let component: BotaoNavComponent;
  let fixture: ComponentFixture<BotaoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
