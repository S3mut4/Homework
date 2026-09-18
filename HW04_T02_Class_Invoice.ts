// Class Definition
// An invoice is an immutable commercial document issued by a seller to a buyer
// Status: Draft --> Pending --> Paid

class Invoice {
    invoiceNumber: string
    clientName: string
    amount: number
    status: string

    constructor(invoiceNumber: string, clientName: string, amount: number, status: string = 'Draft') {
        this.invoiceNumber = invoiceNumber
        this.clientName = clientName
        this.amount = amount
        this.status = status
    }

    markAsPending(): string | void {
        if (this.status !== 'Draft') {
            return `Cannot mark as pending: invoice is already in '${this.status}' status.`
        }
        this.status = 'Pending'
    }

    markAsPaid(): string | void {
        if (this.status === 'Paid') {
            return 'This invoice has already been paid.'
        }
        if (this.status !== 'Pending') {
            return `Cannot mark as paid: invoice must be in 'Pending' status first.`
        }
        this.status = 'Paid'
    }

    changeAmount(newAmount: number): string | void {
        if (this.status !== 'Draft') {
            return `Cannot change amount: invoice is immutable once issued (current status: '${this.status}').`
        }
        this.amount = newAmount
    }
}

// Verification
// Handling large numbers cleanly:
// 1. Numeric Separator (_): Visual separator making large numbers readable (e.g., 42_000_000_000).
// JS ignores underscores at runtime, treating it as 42000000000.

// 2. BigInt Literal (n): The 'n' suffix creates a bigint type (e.g., 42000000000n).
// Used for integers exceeding Number.MAX_SAFE_INTEGER (9,007,199,254,740,991) to prevent precision loss.

// 1. Invoice instance created as Draft for Yutani Corp
const myInvoice = new Invoice('WY-2179', 'Yutani Corp', 42_000_000_000, 'Draft')
console.log('Initial status:', myInvoice.status) // 'Draft'

// Draft amount can be modified freely
myInvoice.changeAmount(50_000_000_000)
console.log('Updated Draft amount:', myInvoice.amount) // 50000000000

// 2. Issue invoice to Pending status
myInvoice.markAsPending()
console.log('Current status:', myInvoice.status) // 'Pending'

// Attempting to change amount on a Pending invoice fails
console.log(myInvoice.changeAmount(99_999_999_999))
// Output: "Cannot change amount: invoice is immutable once issued (current status: 'Pending')."

// 3. Mark invoice as Paid
myInvoice.markAsPaid()
console.log('Current status:', myInvoice.status) // 'Paid'

// Attempting to change amount on a Paid invoice fails
console.log(myInvoice.changeAmount(99_999_999_999))
// Output: "Cannot change amount: invoice is immutable once issued (current status: 'Paid')."

// 4. Again markAsPaid() to get the already paid notice
console.log(myInvoice.markAsPaid())
// Output: "This invoice has already been paid."

// References & Safety checks
console.log('Max safe normal integer reference:', Number.MAX_SAFE_INTEGER)
console.log('Final untouched Invoice amount:', myInvoice.amount) // 50000000000