import { Component, Input, OnInit } from '@angular/core';
import { Skills } from './skills.model';

@Component({
  selector: 'app-professional-skill',
  templateUrl: './professional-skill.component.html',
  styleUrls: ['./professional-skill.component.css']
})
export class ProfessionalSkillComponent implements OnInit {
  @Input() skills:Array<Skills>;
  constructor() { }

  ngOnInit(): void {
  }

}
