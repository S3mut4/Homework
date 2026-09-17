// Class Definition
// A Customer Ledger tracking continuous financial activity.
// Customer Balance rule: (+) Positive means Credit in favor of Customer. (-) Negative means Debt.

class CustomerLedger {
    clientName: string
    invoices: bigint[]
    payments: bigint[]

    constructor(clientName: string) {
        this.clientName = clientName
        this.invoices = []
        this.payments = []
    }

    get totalBilled(): bigint {
        return this.invoices.reduce((sum, amount) => sum + amount, 0n)
    }

    get totalPaid(): bigint {
        return this.payments.reduce((sum, amount) => sum + amount, 0n)
    }

    // Customer Perspective: Total Paid - Total Billed
    // (+) Credit in favor of customer | (-) Debt owed by customer
    get customerBalance(): bigint {
        return this.totalPaid - this.totalBilled
    }

    get accountStatus(): "Settled" | "Customer Debt" | "Customer Credit" {
        const balance = this.customerBalance

        if (balance === 0n) return "Settled"
        if (balance > 0n) return "Customer Credit"
        return "Customer Debt"
    }

// Class Methods

    addInvoice(amount: bigint): string | void {
        if (amount <= 0n) {
            return "Error: Invoice amount must be greater than zero."
        }
        this.invoices.push(amount)
    }

    recordPayment(amount: bigint): string | void {
        if (amount <= 0n) {
            return "Error: Payment amount must be greater than zero."
        }
        this.payments.push(amount)
    }
}

// Verification Suite

console.log("=== 1. INITIAL STATE ===")
const ledger = new CustomerLedger("Weyland-Yutani Corp")
console.log("Status:", ledger.accountStatus) // "Settled"
console.log("Balance:", ledger.customerBalance) // 0n

console.log("\n=== 2. GUARD CLAUSES & INPUT VALIDATION ===")
// Rejecting non-positive values
console.log(ledger.addInvoice(0n)) // "Error: Invoice amount must be greater than zero."
console.log(ledger.recordPayment(-5_000n)) // "Error: Payment amount must be greater than zero."
console.log("Balance remains intact:", ledger.customerBalance) // 0n

console.log("\n=== 3. GENERATING DEBT (First Invoice) ===")
ledger.addInvoice(50_000_000_000n)
console.log("Total Billed:", ledger.totalBilled) // 50000000000n
console.log("Customer Balance:", ledger.customerBalance) // -50000000000n (Debt)
console.log("Status:", ledger.accountStatus) // "Customer Debt"

console.log("\n=== 4. PARTIAL PAYMENT ===")
ledger.recordPayment(20_000_000_000n)
console.log("Total Paid:", ledger.totalPaid) // 20000000000n
console.log("Remaining Customer Debt:", ledger.customerBalance) // -30000000000n
console.log("Status:", ledger.accountStatus) // "Customer Debt"

console.log("\n=== 5. EXACT SETTLEMENT ===")
ledger.recordPayment(30_000_000_000n)
console.log("Total Paid:", ledger.totalPaid) // 50000000000n
console.log("Customer Balance:", ledger.customerBalance) // 0n
console.log("Status:", ledger.accountStatus) // "Settled"

console.log("\n=== 6. OVERPAYMENT (Customer Credit) ===")
ledger.recordPayment(15_000_000_000n)
console.log("Customer Credit Balance (+):", ledger.customerBalance) // 15000000000n
console.log("Status:", ledger.accountStatus) // "Customer Credit"

console.log("\n=== 7. CONSUMING CREDIT WITH A NEW INVOICE ===")
// New invoice of 10B absorbs part of the 15B favor balance
ledger.addInvoice(10_000_000_000n)
console.log("New Total Billed:", ledger.totalBilled) // 60000000000n
console.log("Remaining Customer Credit (+):", ledger.customerBalance) // 5000000000n
console.log("Status:", ledger.accountStatus) // "Customer Credit"

console.log("\n=== 8. BIGINT PRECISION BOUNDARY TEST ===")
// Beyond Number.MAX_SAFE_INTEGER (9,007,199,254,740,991)
const megaInvoice = 100_000_000_000_000_000n
ledger.addInvoice(megaInvoice)
console.log("BigInt exact balance without precision loss:", ledger.customerBalance)
// -99999999995000000n
console.log("Status:", ledger.accountStatus) // "Customer Debt"