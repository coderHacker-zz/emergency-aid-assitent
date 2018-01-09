import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentlistingComponent } from './incidentlisting.component';

describe('IncidentlistingComponent', () => {
  let component: IncidentlistingComponent;
  let fixture: ComponentFixture<IncidentlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

