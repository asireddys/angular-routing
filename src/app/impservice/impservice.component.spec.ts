import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpserviceComponent } from './impservice.component';

describe('ImpserviceComponent', () => {
  let component: ImpserviceComponent;
  let fixture: ComponentFixture<ImpserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
