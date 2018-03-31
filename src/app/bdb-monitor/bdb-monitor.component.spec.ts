import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbMonitorComponent } from './bdb-monitor.component';

describe('BdbMonitorComponent', () => {
  let component: BdbMonitorComponent;
  let fixture: ComponentFixture<BdbMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdbMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
