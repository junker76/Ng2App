import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatiionMenuComponent } from './navigatiion-menu.component';

describe('NavigatiionMenuComponent', () => {
  let component: NavigatiionMenuComponent;
  let fixture: ComponentFixture<NavigatiionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatiionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatiionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
