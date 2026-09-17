// Class Definition following the Balance-Driven pattern using BigInt
class Invoice {
    invoiceNumber: string
    clientName: string
    amount: bigint
    payments: bigint[] // Ledger of payments received as BigInt

    constructor(invoiceNumber: string, clientName: string, amount: bigint) {
        this.invoiceNumber = invoiceNumber
        this.clientName = clientName
        this.amount = amount
        this.payments = []
    }

    // 1. Total paid initialized at 0n
    get totalPaid(): bigint {
        return this.payments.reduce((sum, payment) => sum + payment, 0n)
    }

    // 2. Remaining balance using BigInt subtraction
    get remainingBalance(): bigint {
        return this.amount - this.totalPaid
    }

    // 3. Derive status dynamically
    get status(): "Pending" | "Partially Paid" | "Paid" | "Overpaid" {
        const balance = this.remainingBalance

        if (balance === 0n) return "Paid"
        if (balance < 0n) return "Overpaid"
        if (balance < this.amount) return "Partially Paid"
        return "Pending"
    }

    // Record a payment
    addPayment(paymentAmount: bigint): void {
        if (paymentAmount <= 0n) return
        this.payments.push(paymentAmount)
    }

    // Update invoice total amount
    changeAmount(newAmount: bigint): void {
        this.amount = newAmount
    }
}

// Verification

// Create an invoice for Yutani Corp with 50 billion credits
const invoice = new Invoice("WY-2179", "Yutani Corp", 50_000_000_000n)
console.log("Initial status:", invoice.status) // "Pending"

// Client pays 20 billion
invoice.addPayment(20_000_000_000n)
console.log("Status after partial payment:", invoice.status) // "Partially Paid"
console.log("Remaining balance:", invoice.remainingBalance) // 30000000000n

// Invoice amount increases to 70 billion
invoice.changeAmount(70_000_000_000n)
console.log("Status after scope change:", invoice.status) // "Partially Paid"
console.log("New remaining balance:", invoice.remainingBalance) // 50000000000n

// Client pays the remaining 50 billion
invoice.addPayment(40_000_000_000n)
console.log("Final status:", invoice.status) // "Paid"
console.log("Final remaining balance:", invoice.remainingBalance) // 0n

// Client pays the remaining 50 billion
invoice.addPayment(10_000_000_000n)
console.log("Final status:", invoice.status) // "Paid"
console.log("Final remaining balance:", invoice.remainingBalance) // 0n