import { Skills } from './../professional-skill/skills.model';

export class SkillsInfo {
  SkillsData(): Array<Skills> {
    return [{
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
      name: "Python",
      experience: 40
    }];
  }
}