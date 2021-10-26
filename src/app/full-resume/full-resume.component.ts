import { ExperienceInfo } from './../data/experience';
import { Info } from './../personal-info/info.model';
import { Education } from './../education/educaton.model';
import { Interest } from '../interest/interest.model';
import { Skills } from '../professional-skill/skills.model';
import { Component, OnInit, } from '@angular/core';
import { Language } from '../language/language.model';
import { Experience } from '../experience/experience.model';
import { Information } from '../data/info';
import { EducationInfo } from '../data/education';
import { SkillsInfo } from '../data/skills';
import { InterestInfo } from '../data/interest';
import { LanguageInfo } from '../data/language';


@Component({
  selector: 'app-full-resume',
  templateUrl: './full-resume.component.html',
  styleUrls: ['./full-resume.component.css'],
})
export class FullResumeComponent implements OnInit {
  language: Array<Language>
  interest: Array<Interest>
  experience: Array<Experience>
  info: Array<Info>
  educations: Array<Education>
  skills: Array<Skills>

  constructor() { }

  ngOnInit(): void {

    const education = new EducationInfo();
    this.educations = education.EductionData();

    const info = new Information();
    this.info = info.InfoData();

    const experience = new ExperienceInfo();
    this.experience = experience.ExperienceData();

    const interest = new InterestInfo();
    this.interest = interest.InterestData();

    const language = new LanguageInfo();
    this.language = language.LanguageData();

    const skill = new SkillsInfo();
    this.skills = skill.SkillsData();
    
  }

}
