// Code provided, review code and solve errors
// Class Definition
class BankAccount {
    balance: number

    constructor(initialAmount: number) {
        this.balance = initialAmount
    }

    deposit(amount: number): number {
        this.balance += amount
        return this.balance
    }
}

class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(): number {
        this.speed += 20
        return this.speed
    }
}

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }
}

class Rectangle {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    getArea(): number {
        return this.width * this.height
    }
}

// Verification

const car = new Car('Toyota', 100)
console.log(car.accelerate()) // After fixing: will print 120

const john = new Person('John', 30)
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())  // After fixing: will print 30

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50