import { Education, EducationType } from './../education/educaton.model';
import { Intrest } from '../intrest/intrest.model';
import { Skills } from '../professional-skill/skills.model';
import { Component, OnInit, } from '@angular/core';
import { Language } from '../language/language.model';
import { Experience } from '../experience/experience.model';




@Component({
  selector: 'app-full-resume',
  templateUrl: './full-resume.component.html',
  styleUrls: ['./full-resume.component.css']
})
export class FullResumeComponent implements OnInit {
  info={
    name: "Aman Singh",
    workAs: "Web Developer",
    contactNo: 7518426806,
    email: "aman.s1811@outlook.com",
    address: "Madhogunj Hardoi U.P."
  };

  educations: Array<Education> = [{
    institute: "S D L V S SH Ishwar Pur Sai",
    course: "10TH",
    startDate: 2014,
    endDate: 2015,
    city: "Hardoi Uttar Pradesh",
    type: EducationType.primarySchool,
  },
  {
    institute: "Lucknow Public School",
    course: "12th",
    startDate: 2016,
    endDate: 2017,
    city: "Hardoi Uttar Pradesh",
    type: EducationType.secondrySchool,
  },
  {
    institute: "Krishna Engineering College",
    course: "B.tech",
    startDate: 2018,
    endDate: 2022,
    city: "Ghaziabad Uttar Pradesh",
    type: EducationType.graduation,
  }];

  language: Array<Language> = [{
    langs: "English",
    percentage: 60
  },
  {
    langs: "Hindi",
    percentage: 100
  }];

  skills: Array<Skills> = [{
    name: "Angular",
    experience: 20
  },
  {
    name: "HTML",
    experience: 30
  },
  {
    name: "CSS",
    experience: 50
  },
  {
    name: "JavaScript",
    experience: 40
  },
  {
    name: "Git",
    experience: 50
  },
  {
    name:"Python",
    experience:40
  }];

  intrest: Array<Intrest> = [{
    intrests: "Playing Chess",
  },
  {
    intrests: "listen music",
  },
  {
    intrests: "Watching Series",
  },
  {
    intrests: "Online Game",
  }];

  experience: Array<Experience> = [{
    projectName: "Spotify Clone",
    projectDetail: "In this project, I am tring to make spotify Clone using javascript,html,css.",
    startDate: 2021,
    endDate: 2021,
    skillUsed: "javascript,html,css",
    companyName: "____"
  },
  {
    projectName: "Covid Detail",
    projectDetail: "In this project, I show you current patient of covid-19. In this project, I use JavaScript, html,css  ",
    startDate: 2021,
    endDate: 2021,
    skillUsed: "javascript,html,css",
    companyName: "____"
  },
  {
    projectName: "Snake Game",
    projectDetail: "In this project, I am tring to make a simple old game(Snake Game). In this project I have used html,css,and python",
    startDate: 2021,
    endDate: 2021,
    skillUsed: "pyhton,html,css",
    companyName: "____"
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
