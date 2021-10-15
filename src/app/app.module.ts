import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { FullResumeComponent } from './full-resume/full-resume.component';
import { IntrestComponent } from './intrest/intrest.component';
import { LanguageComponent } from './language/language.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfessionalSkillComponent } from './professional-skill/professional-skill.component';
import { ExperienceComponent } from './experience/experience.component';


const appRoutes:Routes=[
  {path:'' , component:FullResumeComponent},
  // {path:'', component:EducationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    FullResumeComponent,
    IntrestComponent,
    LanguageComponent,
    PersonalInfoComponent,
    ProfessionalSkillComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
