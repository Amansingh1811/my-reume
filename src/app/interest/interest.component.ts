import { Component, OnInit,Input } from '@angular/core';
import { Interest } from './interest.model';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  @Input() interest:Array<Interest>
  constructor() { }

  ngOnInit(): void {
  }

}
