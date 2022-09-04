import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  currentUser='';

  constructor(private socket: Socket,
    public navCntrl: NavController,
    public router: Router
    ) { }

  ngOnInit() {
  }
   joinChat(){
   //  this.socket.connect();
     //this.socket.emit('set-name', this.currentUser);
    this.router.navigateByUrl('home-page/chat');   }

}
