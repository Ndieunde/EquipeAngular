import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  //Modify the constructor with a parameter that declares a public messageService property
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    
  }

}
