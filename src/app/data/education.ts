import { Education, EducationType } from './../education/educaton.model';


export class EducationInfo {
    EductionData(): Array<Education> {
        return [{
            institute: "S D L V S SH Ishwar Pur Sai",
            course: "10TH",
            startDate: 2014,
            endDate: 2015,
            city: "Hardoi Uttar Pradesh",
            type: EducationType.primarySchool,
        },
        {
            institute: "Lucknow Public School",
            course: "12th",
            startDate: 2016,
            endDate: 2017,
            city: "Hardoi Uttar Pradesh",
            type: EducationType.secondrySchool,
        },
        {
            institute: "Krishna Engineering College",
            course: "B.tech",
            startDate: 2018,
            endDate: 2022,
            city: "Ghaziabad Uttar Pradesh",
            type: EducationType.graduation,
        }]
    }
}