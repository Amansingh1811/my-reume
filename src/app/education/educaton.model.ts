export class Education{
    institute: string
    course: string
    startDate: number
    endDate: number
    city: string
    type: EducationType
}


export enum EducationType {
    primarySchool="primarySchool",
    secondrySchool="secondrySchool",
    diploma="diploma",
    graduation="graduation",
    postGraduation="postGraduation",
    phd="phd"
}