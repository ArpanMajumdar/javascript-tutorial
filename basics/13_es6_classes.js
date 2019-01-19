// ES6 class

class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const diff = Date.now() - this.birthday.getTime();
        const dateDiff = new Date(diff);
        return dateDiff.getUTCFullYear() - 1970;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const arpan = new Person('Arpan', 'Majumdar', '07-14-1996');
console.log("​arpan", arpan);
console.log(arpan.greeting());

// Static methods can be used without instantiating object of a class

// This throws error
// console.log(arpan.addNumbers(1,2));
console.log(Person.addNumbers(1, 2));

