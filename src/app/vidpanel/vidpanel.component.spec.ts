import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidpanelComponent } from './vidpanel.component';

describe('VidpanelComponent', () => {
  let component: VidpanelComponent;
  let fixture: ComponentFixture<VidpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
