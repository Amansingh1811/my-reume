import { Language } from "../language/language.model";

export class LanguageInfo {
    LanguageData(): Array<Language> {
        return [{
            langs: "English",
            percentage: 60
        },
        {
            langs: "Hindi",
            percentage: 100
        }];
    }
}