import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  constructor() { }

  getDetailsForPatient(name) {
    var activities = [];
    if(name == 'Pop Ionel') {
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_walk"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_run"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_run"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_run"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_bike"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_bike"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_run"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_walk"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_bike"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_walk"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_walk"});
      activities.push({created_at: "2019-12-21 17:51", duration: "7 min", distance:"0,3 km", title:"Shopping Walk", image: "directions_walk"})
    }

    return activities
  }
}

export interface Activity {
  created_at: string;
  duration: string;
  distance: string;
  title: string;
  image: string
}
