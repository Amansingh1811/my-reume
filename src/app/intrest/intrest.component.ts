import { Component, OnInit,Input } from '@angular/core';
import { Intrest } from './intrest.model';

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent implements OnInit {

  @Input() intrest:Array<Intrest>
  constructor() { }

  ngOnInit(): void {
  }

}
