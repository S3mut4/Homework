// --- Task 1: Class Person ---
class Person {
    firstName :string;
    lastName :string;

    constructor(firstName :string, lastName :string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Verification
const person1 = new Person("Hola", "Mundo");
const person2 = new Person("Mundo", "Hola");

console.log("Person 1:", person1);
console.log("Person 2:", person2);

// Modify an existing instance of one class
const person3 = new Person("Hola", "Mundo");
console.log(person3.firstName);
person3.firstName = "aloH";
console.log(person3.firstName);