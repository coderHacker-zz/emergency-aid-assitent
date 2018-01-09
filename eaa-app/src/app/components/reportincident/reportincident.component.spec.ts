import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportincidentComponent } from './reportincident.component';

describe('ReportincidentComponent', () => {
  let component: ReportincidentComponent;
  let fixture: ComponentFixture<ReportincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
