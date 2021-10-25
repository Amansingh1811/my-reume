import { Injectable } from '@angular/core';
import { Experience } from './../experience/experience.model';


@Injectable()
export class ExperienceInfo{
    getexperiencedata():Array<Experience>{
        return [{
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
    }
}