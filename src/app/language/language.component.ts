import { Component, OnInit,Input } from '@angular/core';
import { Language } from './language.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Input() language:Array<Language>;
  constructor() { }

  ngOnInit(): void {
  }

}
