import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoPageComponent } from './personal-info-page.component';

describe('PersonalInfoPageComponent', () => {
  let component: PersonalInfoPageComponent;
  let fixture: ComponentFixture<PersonalInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
