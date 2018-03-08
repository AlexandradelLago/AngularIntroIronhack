import { Component, OnInit } from '@angular/core';
//get the router (for params)
import { ActivatedRoute } from '@angular/router';
//get service for the contacts
import { ContactsService } from '../services/contacts.service';
//for redirects actions:
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

  //we inject everything in the contructor
  constructor(
    private router:ActivatedRoute,
    private service: ContactsService,
    private redirectRouter: Router
  ) { }
  contactId:number;
  contact:any;
  ngOnInit() {
    this.contactId = +this.router.snapshot.parent.params['id'];
    let contactO =  this.service.findOneById(this.contactId);
    this.contact = {
      name: contactO.name,
      tel: contactO.tel,
      id:contactO.id
    }
  }

  updateContact(){
    let res = this.service.findOneAndUpdate(this.contact);
    console.log(res);
    this.redirectRouter.navigate(['contact', this.contactId]);
  }

}
