// Different ways of creating objects

const personPrototype = {
    greeting: function () {
        return `Hello ${this.firstName} ${this.lastName} ...`
    }
}

const arpan = Object.create(personPrototype);


arpan.firstName = 'Arpan';
arpan.lastName = 'Majumdar';

console.log("​arpan", arpan);
console.log(arpan.greeting());

const ujjwal = Object.create(personPrototype, {
    firstName: { value: 'Ujjwal' },
    lastName: { value: 'Saini' },
    age: { value: 26 }
});
console.log("​ujjwal", ujjwal);
console.log(ujjwal.greeting());


