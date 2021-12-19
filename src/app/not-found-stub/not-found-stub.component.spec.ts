import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundStubComponent } from './not-found-stub.component';

describe('NotFoundStubComponent', () => {
  let component: NotFoundStubComponent;
  let fixture: ComponentFixture<NotFoundStubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundStubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
