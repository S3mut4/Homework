// Class Definition
class BankAccount {
    balance: number

    constructor(initialAmount: string) {
        balance = initialAmount
    }

    deposit(amount: number): number {
        this.balance
        return 0
    }
}

class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: string) {
        this.brand = Brand
        this.speed = Speed
    }

    accelerate(): void {
        this.speed = 20
        return speed
    }
}

class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: string) {
        this.brand = Brand
        this.speed = Speed
    }

    accelerate(): void {
        this.speed = 20
        return speed
    }
}

class Person {
    name: string
    age: number

    constructor(name: string, age: string) {
        this.Name = name
        this.age = age
    }

    getName(): string {
        return this.Name
    }

    getAge(): number {
        return age
    }
}

class Rectangle {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.Width = width
        this.Height = height
    }

    getArea(): number {
        return width * height
    }
}

// Verification

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600

const car = new Car('Toyota', 100)
console.log(car.accelerate()) // After fixing: will print 120

const john = new Person('John', 30)
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())  // After fixing: will print 30

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50