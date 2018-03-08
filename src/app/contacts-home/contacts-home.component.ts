import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-contacts-home',
  templateUrl: './contacts-home.component.html',
  styleUrls: ['./contacts-home.component.css'],
  //providers:[ContactsService]
})
export class ContactsHomeComponent implements OnInit {
  constructor(
    private router:ActivatedRoute,
    private contactsService: ContactsService
  ) { }
  contactId:number;
  contact:Object;
  ngOnInit() {
    this.contactId = +this.router.snapshot.parent.params['id'];
    this.contact = this.contactsService.findOneById(this.contactId);
  }
}
