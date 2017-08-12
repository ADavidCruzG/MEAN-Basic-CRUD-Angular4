import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsCreateComponent } from './teams-create.component';

describe('TeamsCreateComponent', () => {
  let component: TeamsCreateComponent;
  let fixture: ComponentFixture<TeamsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
