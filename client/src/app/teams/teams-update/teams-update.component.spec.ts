import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsUpdateComponent } from './teams-update.component';

describe('TeamsUpdateComponent', () => {
  let component: TeamsUpdateComponent;
  let fixture: ComponentFixture<TeamsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
