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
myInvoice.changeAmount(99_999_999_999)
console.log(Number.MAX_SAFE_INTEGER)
console.log("New Invoice amount:", myInvoice.amount)