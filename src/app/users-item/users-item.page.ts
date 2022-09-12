import { UsersService } from './../services/users.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.page.html',
  styleUrls: ['./users-item.page.scss'],
})
export class UsersItemPage implements OnInit {

  users: User[] = [];

  constructor(public modalCtrl: ModalController,
            private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().toPromise()
    .then(res => this.users = res)
  }

  unread() {}

}
