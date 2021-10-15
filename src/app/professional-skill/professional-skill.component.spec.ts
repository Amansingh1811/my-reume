import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillComponent } from './professional-skill.component';

describe('ProfessionalSkillComponent', () => {
  let component: ProfessionalSkillComponent;
  let fixture: ComponentFixture<ProfessionalSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
