// Class Definition
class Invoice {
    invoiceNumber: string
    clientName: string
    amount: number
    status: string

    constructor( invoiceNumber: string, clientName: string, amount: number, status: string) {
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

// 1. Invoice instance pending
const myInvoice = new Invoice("INV-101", "Acme Corp", 500, "Pending")
console.log("Status inicial:", myInvoice.status)

// 2. Invoice to paid through markAsPaid()
myInvoice.markAsPaid()
console.log("Status actual:", myInvoice.status)

// 3. Again markAsPaid() to have the already paid advice
console.log(myInvoice.markAsPaid())

// 4. changeAmount() to change Invoice amount
myInvoice.changeAmount(750)
console.log("New Invoice amount:", myInvoice.amount) // 750