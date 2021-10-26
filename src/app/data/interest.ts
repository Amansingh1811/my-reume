import { Interest } from './../interest/interest.model';


export class InterestInfo {
  InterestData(): Array<Interest> {
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