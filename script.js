//properties: make an empty array
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}
let goodBook = new AddressBook();
goodBook.add("Amal", "mj@jordan23.com", "248.777.9311", "mom");
goodBook.add("Eddie", "mj@cas.edu", "281.330.8004", "dad");
goodBook.add("David", "Dayyash@yahoo.com", "248.437.9321", "Brother");
console.log(goodBook);

goodBook.deleteAt(2);

function print(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
    // function print(addressBookReference) {
    //     for(let contact of addressBookReference.contacts){
    //         console.log(contact);
    //     }
    // }  addressBookReference (object) withing the (array)
  });
}
print(goodBook);
