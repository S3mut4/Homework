// --- Task 2: Class Product ---
class Product {
    name :string;
    price :number;
    isAvailable :boolean;

    constructor(name :string, price :number, isAvailable :boolean) {
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}

// Verification
const product1 = new Product("MacBook Pro", 1999.99, true);

console.log("Product:", product1);