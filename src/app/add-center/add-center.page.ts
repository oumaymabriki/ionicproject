import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Center } from '../models/center';
import { CentersService } from '../services/centers.service';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.page.html',
  styleUrls: ['./add-center.page.scss'],
})
export class AddCenterPage implements OnInit {

  center = new Center();

  constructor(private centerService: CentersService,
            private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    let centerId = await this.activatedRoute.snapshot.params['id'];
    if (centerId != 'new') {
      await this.centerService.getCenterById(centerId).toPromise()
      .then(res => this.center = res)
      .catch(err => console.log)
    } 
  }

  save() {
    if (this.center._id.length==0) {
      // Add new
      this.centerService.addCenter(this.center).toPromise()
      .then(res => alert('Center added'))
      .catch(err => console.log)
    } else {
      this.centerService.updateCenter(this.center).toPromise()
      .then(res => alert('Center updated'))
      .catch(err => console.log)
    }
    
  }

}
