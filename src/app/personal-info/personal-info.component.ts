import { Component, OnInit, Input } from '@angular/core';
import { Info } from './info.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() info: Array<Info>;
  constructor() { }

  ngOnInit(): void {
  }

}
