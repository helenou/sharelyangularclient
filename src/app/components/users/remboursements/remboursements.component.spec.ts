import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemboursementsComponent } from './remboursements.component';

describe('RemboursementsComponent', () => {
  let component: RemboursementsComponent;
  let fixture: ComponentFixture<RemboursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemboursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemboursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
