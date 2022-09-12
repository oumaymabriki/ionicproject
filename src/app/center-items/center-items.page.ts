import { Component, OnInit } from '@angular/core';
import { Center } from '../models/center';
import { CentersService } from '../services/centers.service';

@Component({
  selector: 'app-center-items',
  templateUrl: './center-items.page.html',
  styleUrls: ['./center-items.page.scss'],
})
export class CenterItemsPage implements OnInit {

  centers: Center[] = [];

  constructor(private centerService: CentersService) { }

  async ngOnInit() {
    await this.centerService.getCenters().toPromise()
    .then(res => this.centers = res)
    .catch(err => console.log)
  }

}
