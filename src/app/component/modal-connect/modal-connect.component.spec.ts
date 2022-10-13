import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConnectComponent } from './modal-connect.component';

describe('ModalConnectComponent', () => {
  let component: ModalConnectComponent;
  let fixture: ComponentFixture<ModalConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
