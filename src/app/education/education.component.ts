import { Education } from './educaton.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() educations:Array<Education>;
  constructor() { }

  ngOnInit(): void {
  }

}
