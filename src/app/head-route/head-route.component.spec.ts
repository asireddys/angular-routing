import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadRouteComponent } from './head-route.component';

describe('HeadRouteComponent', () => {
  let component: HeadRouteComponent;
  let fixture: ComponentFixture<HeadRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
