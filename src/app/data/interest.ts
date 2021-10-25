import { Interest } from './../interest/interest.model';
import { Injectable } from "@angular/core";

@Injectable()

export class InterestInfo{
    getinterestdata():Array<Interest>{
        return [{
            interests: "Playing Chess",
          },
          {
            interests: "listen music",
          },
          {
            interests: "Watching Series",
          },
          {
            interests: "Online Game",
          }];
        
    }
}