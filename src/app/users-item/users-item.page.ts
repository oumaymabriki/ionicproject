import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.page.html',
  styleUrls: ['./users-item.page.scss'],
})
export class UsersItemPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  unread() {}

}
