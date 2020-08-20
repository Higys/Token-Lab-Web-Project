import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletionModalComponent } from './confirm-deletion-modal.component';

describe('ConfirmDeletionModalComponent', () => {
  let component: ConfirmDeletionModalComponent;
  let fixture: ComponentFixture<ConfirmDeletionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeletionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeletionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
