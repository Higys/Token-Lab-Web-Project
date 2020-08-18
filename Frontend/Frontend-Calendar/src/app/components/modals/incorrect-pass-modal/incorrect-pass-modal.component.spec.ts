import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectPassModalComponent } from './incorrect-pass-modal.component';

describe('IncorrectPassModalComponent', () => {
  let component: IncorrectPassModalComponent;
  let fixture: ComponentFixture<IncorrectPassModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectPassModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectPassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
