// Person constructor
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = new Date(dateOfBirth);
    this.getAge = function () {
        const diff = Date.now() - this.dateOfBirth.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const arpan = new Person('Arpan', '7-14-1996');
console.log("​arpan", arpan);
console.log('age',arpan.getAge());

// If we use this in global scope, it refers to the window object
console.log(this);
