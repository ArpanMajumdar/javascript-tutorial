class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName} !`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phoneNumber, membershipType) {
        super(firstName, lastName);
        this.phoneNumber = phoneNumber;
        this.membershipType = membershipType;
    }

    static getMembershipFee(membershipType) {
        switch(membershipType){
            case 'standard':
                return 500;
                break;

            case 'premium':
                return 1000;
                break;

            default:
                return 'Not a valid membership';
        }
    }
}

const arpan = new Customer('Arpan', 'Majumdar', '123-456-7890', 'Premium');
console.log("​arpan", arpan);
console.log(arpan.greeting());
console.log(Customer.getMembershipFee('premium'));