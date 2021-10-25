import { Info } from './../personal-info/info.model';
import { Injectable } from "@angular/core";


@Injectable()

export class Information {
    getinfo(): Array<Info> {
        return [{
            name: "Aman Singh",
            photoURL: "../assets/img/amansingh.jpg",
            workAs: "Web Developer",
            contactNo: 7518426806,
            email: "aman.s1811@outlook.com",
            address: "Madhogunj Hardoi U.P."
        }]
    }
}

