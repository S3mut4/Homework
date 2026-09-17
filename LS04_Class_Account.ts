//Code style & naming conventions
// ●	Line endings without semicolons.
// ●	Consistent indentation.
// ●	A single, consistent quote style throughout the file.
// ●	Meaningful names for variables and constants.
//
//
// google.github.io/styleguide/tsguide.html

export class Account {
    // 1. Fields
    username: string
    password: string
    email: string
    age: number
    currentBalance: number
    accountId: string

    // 2. Constructor
    constructor(
        username: string,
        password: string,
        email: string,
        age: number,
        currentBalance: number,
        accountId: string
    ) {
        this.username = username
        this.password = password
        this.email = email
        this.age = age
        this.currentBalance = currentBalance
        this.accountId = accountId
    }

    // Helper getter for adulthood check
    get isAdult(): boolean {
        return this.age >= 18
    }

    // 3. Methods

    // 3.1. Method to top up balance
    topUp(amount: number): void {
        if (amount > 0) {
            this.currentBalance += amount
        }
    }

    // 3.1.1. Method to top up balance and return updated amount
    topUpWithInfo(amount: number): number {
        if (amount > 0) {
            this.currentBalance += amount
        }
        return this.currentBalance
    }

    // 3.2. Method to withdraw money
    payOut(amount: number): boolean {
        if (!this.isAdult || amount <= 0 || this.currentBalance < amount) {
            return false
        }
        this.currentBalance -= amount
        return true
    }

    // 3.3. Method to send money
    sendMoney(targetAccount: Account, amount: number): boolean {
        if (this.payOut(amount)) {
            targetAccount.topUp(amount)
            return true
        }
        return false
    }
}

// --- Test Execution Minor/Adult ---
const minorAccount = new Account('Carlos', 'xxxx', 'dan@xxx.com', 4, 0, 'Carl01')
const adultAccount = new Account('Daniel', 'yyyy', 'carl@xxx.com', 48, 0, 'Dan01')

// Some money
let paydayMinor: number = minorAccount.topUpWithInfo(100)
let paydayAdult: number = adultAccount.topUpWithInfo(1000)

// 1. Minor Account
console.log('\n--- Minor Account Test ---')
console.log(`Balance after payday (${paydayMinor}):`, minorAccount.currentBalance)
minorAccount.topUp(500)
console.log('Balance after topUp (500):', minorAccount.currentBalance)
let isPayoutSuccessful: boolean = minorAccount.payOut(100)
console.log('Payout 100 successful?:', isPayoutSuccessful)
console.log('Balance after failed payout:', minorAccount.currentBalance)

// 2. Adult Account
console.log('\n--- Adult Account Test ---')
console.log(`Balance after payday (${paydayAdult}):`, adultAccount.currentBalance)
adultAccount.topUp(500)
console.log('Balance after topUp (500):', adultAccount.currentBalance)
isPayoutSuccessful = adultAccount.payOut(100)
console.log('Payout 100 successful?:', isPayoutSuccessful)
console.log('Balance after payout:', adultAccount.currentBalance)

// 3. Send Money Test
console.log('\n--- Send Money Test ---')
const isTransferSuccessful: boolean = adultAccount.sendMoney(minorAccount, 150)
console.log('Transfer 150 to Minor successful?:', isTransferSuccessful)
console.log('Adult new balance:', adultAccount.currentBalance)
console.log('Minor new balance:', minorAccount.currentBalance)