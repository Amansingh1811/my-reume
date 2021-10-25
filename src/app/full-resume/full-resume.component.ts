import { ExperienceInfo } from './../data/experience';
import { Info } from './../personal-info/info.model';
import { Education} from './../education/educaton.model';
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
  providers: [Information,
              EducationInfo,
              ExperienceInfo,
              SkillsInfo,
              InterestInfo,
              LanguageInfo]
})
export class FullResumeComponent implements OnInit {
  language: Array<Language>
  interest: Array<Interest>
  experience: Array<Experience>
  info: Array<Info>
  educations: Array<Education>
  skills: Array<Skills>

  constructor(private infor: Information,
              private educ: EducationInfo,
              private exper: ExperienceInfo,
              private skill: SkillsInfo,
              private like: InterestInfo,
              private lang: LanguageInfo) {
    this.info = this.infor.getinfo();
    this.educations = this.educ.geteductioninfo();
    this.experience = this.exper.getexperiencedata();
    this.skills = this.skill.getskillsdata();
    this.interest = this.like.getinterestdata();
    this.language = this.lang.languageData();
  }

  ngOnInit(): void {
  }

}
