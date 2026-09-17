//////////////////////////////////////////////////////////////
// Project Setup & Verification
// 1. Initialized via 'npm init -y' & 'npx tsc --init'
// 2. Set "type": "module" in package.json for ES modules
// 3. Validated with 'npx tsc --noEmit'
//////////////////////////////////////////////////////////////

// --- Task 1: Calculate the Area of a Rectangle ---
// Definition
let length: number = 4
let width: number = 3
let area: number = length * width

// Verification
console.log('Task 1 - Area:', area)

// --- Task 2: Calculate Body Mass Index (BMI) ---
// Definition
let weight: number = 70   // in kg
let height: number = 1.75 // in meters
let bmi: number = weight / (height * height)

// Verification
console.log('Task 2 - BMI:', bmi)

// --- Task 3: Temperature Converter ---
// Definition
let celsius: number = 25                        // ºC
let fahrenheit: number = (9 / 5) * celsius + 32 // Conversion to ºF

// Verification
console.log(`Task 3 - Temperature: ${celsius}ºC is equal to ${fahrenheit}ºF`)

// --- Task 4: Age Check with Boolean ---
// Definition
let age: number = 20
let isAdult: boolean = age >= 18

// Verification
console.log('Task 4 - Can he go to the party?', isAdult)

// --- Task 5: String Concatenation ---
// Definition
let firstName: string = 'Hello'
let lastName: string = 'World'
let fullName: string = `${firstName} ${lastName}`

// Verification
console.log('Task 5 - Full Name:', fullName)

// --- Task 6: Age Check with Strict Equality ---
// Definition 6.1 ("18" string vs 18 number)
// Note: Refactored from 'any' to 'string' per TS best practices.
let userAgeString: string = '18'
let targetAgeNumber: number = 18

// Bypassing TS2367 non-overlapping check to demonstrate JS runtime behavior:
let isStrictAgeEqual: boolean = (userAgeString as unknown) === targetAgeNumber    // false
let isStrictAgeNotEqual: boolean = (userAgeString as unknown) !== targetAgeNumber // true

// Definition 6.2 (true boolean vs "true" string)
let isActiveBool: boolean = true
let isActiveStr: string = 'true'
let isStrictActiveEqual: boolean = (isActiveBool as unknown) === isActiveStr     // false

// Definition 6.3 (Case sensitivity comparison)
let pass1: string = 'QA2026'
let pass2: string = 'QA2026'
let pass3: string = 'qa2026'
let isPassEqual: boolean = pass1 === pass2     // true: identical content & type
let isPassCaseEqual: boolean = pass1 === pass3 // false: JS string comparison is case-sensitive

// Definition 6.4 (20 vs 20)
let price1: number = 20
let price2: number = 20
let isPriceEqual: boolean = price1 === price2    // true: same value and type
let isPriceNotEqual: boolean = price1 !== price2 // false: === and !== always yield opposite boolean values

// Verification
console.log('Task 6.1:', isStrictAgeEqual, isStrictAgeNotEqual)
console.log('Task 6.2:', isStrictActiveEqual)
console.log('Task 6.3:', isPassEqual, isPassCaseEqual)
console.log('Task 6.4:', isPriceEqual, isPriceNotEqual)

// --- Task 7: Strict Equality with Different Types ---
// Definition
let userInput: string = '18'
let actualAge: number = 18

// Bypassing TS2367 to demonstrate loose vs strict coercion in JS runtime:
let isEqualLoose: boolean = (userInput as unknown) == actualAge   // true: == converts types ('18' -> 18)
let isEqualStrict: boolean = (userInput as unknown) === actualAge // false: === checks value AND type

// Verification
console.log('Task 7 - Loose (==):', isEqualLoose)
console.log('Task 7 - Strict (===):', isEqualStrict)

// --- Task 8: Type Conversion from String to Number ---
// Definition
let originalText: string = '42'
let convertedNumber: number = Number(originalText)

// Verification
console.log('Task 8 - Original String:', originalText)
console.log('Task 8 - Converted Number:', convertedNumber)

// --- Task 9: Runtime Type Conversion (Number to String) ---
// Definition
// Real conversion: String() creates a genuine string value ("100") in memory at runtime.
let originalNum9: number = 100
let convertedStr: string = String(originalNum9)

// Verification
console.log('Task 9 - Original Number:', originalNum9, typeof originalNum9) // 100 "number"
console.log('Task 9 - Converted String:', convertedStr, typeof convertedStr) // "100" "string"

// --- Task 10: Type Assertion / Cast (Number to String) ---
// Definition:
// Type assertion ('as') is a compile-time concept in TypeScript. It tricks the compiler
// to treat a value as a different type, but DOES NOT affect the JavaScript runtime value.
//
// Unlike PL/SQL where CAST() performs a physical byte transformation in memory,
// TS assertions completely disappear after transpilation.
//
// Real-world Use Cases for 'as unknown as T':
// 1. Silencing strict compiler checks (e.g., TS2367 non-overlapping type comparisons for tests/demos).
// 2. DOM manipulation where the developer knows the specific element type (e.g., HTMLInputElement).
// 3. Typing external API payloads or unvalidated inputs before assertion libraries run.

let originalNum10: number = 100
let castedStr: string = originalNum10 as unknown as string

// Verification
console.log('Task 10 - Original Number:', originalNum10, typeof originalNum10) // 100 "number"
console.log('Task 10 - Casted String:', castedStr, typeof castedStr)           // 100 "number" (Runtime remains untouched!)