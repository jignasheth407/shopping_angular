import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprofilepageComponent } from './customerprofilepage.component';

describe('CustomerprofilepageComponent', () => {
  let component: CustomerprofilepageComponent;
  let fixture: ComponentFixture<CustomerprofilepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprofilepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
