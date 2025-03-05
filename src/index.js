const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");

const addressBook = new AddressBook();

try {
    addressBook.addContact({ firstName: "Harsh veer", lastName: "Sing", address:"Address1",city: "New York", state: "Bhopal", zip: 10001 ,phone:7828159961,email:"harshveer7828@gmail.com"});
    addressBook.addContact({ firstName: "Alice", lastName: "Smith", address:"Address2",city: "Los Angeles", state: "CA", zip: 90001,phone:7828159961,email:"harshveer7828@gmail.com" });
    addressBook.addContact({ firstName: "Bob", lastName: "Brown", address:"Address1",city: "Chicago", state: "IL", zip: 60601,phone:7828159961,email:"harshveer7828@gmail.com" });
    console.log("Original Entries: ");
    
    addressBook.getContact().forEach(contact =>{
        console.log(contact);
    })

    console.log("Entries after sorting by city:");
    
    addressBook.sortByCity();
    addressBook.getContact().forEach(contact =>{
        console.log(contact);
    })

    // Sort contacts alphabetically by name
    console.log("Entries after sorting by name:");
    
    const sortedContacts = addressBook.sortContactsByName();
    sortedContacts.forEach(contact => console.log(contact));

    

} catch (error) {
    console.log(error);
}
