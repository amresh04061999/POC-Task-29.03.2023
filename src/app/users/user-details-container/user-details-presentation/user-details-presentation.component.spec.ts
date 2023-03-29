import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPresentationComponent } from './user-details-presentation.component';

describe('UserDetailsPresentationComponent', () => {
  let component: UserDetailsPresentationComponent;
  let fixture: ComponentFixture<UserDetailsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
