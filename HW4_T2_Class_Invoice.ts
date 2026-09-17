// Class Definition
class Invoice {
    invoiceNumber: string
    clientName: string
    amount: number
    status: string

    constructor(invoiceNumber: string, clientName: string, amount: number, status: string) {
        this.invoiceNumber = invoiceNumber
        this.clientName = clientName
        this.amount = amount
        this.status = status
    }

    markAsPaid(): string | void {
        if (this.status === "Paid") {
            return "This invoice has already been paid."
        }
        this.status = "Paid"
    }

    changeAmount(newAmount: number): void {
        this.amount = newAmount
    }
}

// Verification

// 1. Invoice instance pending for Yutani Corp with a big number
const myInvoice = new Invoice("WY-2179", "Yutani Corp", 42_000_000_000, "Pending")
console.log("Initial status:", myInvoice.status)

// 2. Invoice to paid through markAsPaid()
myInvoice.markAsPaid()
console.log("Current status:", myInvoice.status)

// 3. Again markAsPaid() to get the already paid notice
console.log(myInvoice.markAsPaid())

// 4. changeAmount() to change Invoice amount to an even larger number

// Handling large numbers cleanly:
// 1. Numeric Separator (_): A visual separator to make large numbers easier to read (e.g., 42_000_000_000).
// JavaScript ignores the underscores completely at runtime, treating it as 42000000000.

// 2. BigInt Literal (n): The n suffix explicitly creates a bigint type instead of a standard number (e.g., 42000000000n).
// Use this when working with integers exceeding $9,007,199,254,740,991$ (Number.MAX_SAFE_INTEGER) to avoid precision loss.

myInvoice.changeAmount(99_999_999_999)
console.log(Number.MAX_SAFE_INTEGER)
console.log("New Invoice amount (V2 following the Balance-Driven pattern in the oven):", myInvoice.amount)