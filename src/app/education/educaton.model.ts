export class Education{
    institute: string
    course: string
    startDate: number
    endDate: number
    city: string
    type: EducationType
}


export enum EducationType {
    primarySchool,
    secondrySchool,
    diploma,
    graduation,
    postGraduation,
    phd
}