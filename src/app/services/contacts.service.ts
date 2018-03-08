import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

contactos = [{
    id:123,
    name:"bliss",
    tel:12345678
  },
{
  name:"chevere bliss",
  id:234,
  tel:987653434
},
{
  id:556,
  name:"angry bliss",
  tel:9998898989
},
{
  id:777,
  name:"raw bliss",
  tel: 888888888
}
];

findOneById(id){
  return this.contactos.find(c=>c.id===id);
}

findOneAndUpdate(contact){
  this.contactos = [...this.contactos.filter(c=>c.id !== contact.id), contact];
  return contact;
}

  constructor() { }

}
