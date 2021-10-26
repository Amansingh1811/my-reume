import { Language } from "../language/language.model";

export class LanguageInfo {
    getLanguageInfo(): Array<Language> {
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