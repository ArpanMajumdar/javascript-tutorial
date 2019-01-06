const person = {
    firstName: 'Arpan',
    lastName: 'Majumdar',
    age: 23,
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    },
    getBirthYear() {
        return 2019 - this.age;
    },
    hobbies: ['coding', 'music', 'sketching']
};

let val = person;
val = person.firstName;
val = person['lastName'];
val = person.hobbies;
val = person.getBirthYear();

console.log(val)