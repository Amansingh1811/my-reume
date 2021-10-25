import { Injectable } from "@angular/core";
import { Language } from "../language/language.model";

@Injectable()

export class LanguageInfo{
    languageData():Array<Language>{
        return  [{
            langs: "English",
            percentage: 60
          },
          {
            langs: "Hindi",
            percentage: 100
          }];
    }
}