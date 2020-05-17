import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserballonComponent } from './userballon.component';

describe('UserballonComponent', () => {
  let component: UserballonComponent;
  let fixture: ComponentFixture<UserballonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserballonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserballonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
