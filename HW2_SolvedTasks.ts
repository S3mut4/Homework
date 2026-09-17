//////////////////////////////////////////////////////////////
//#Create new project
//##################
//npm init -y          #Default Node package.json options
//npx tsc --init.      #Default TypeScript.json options
//##################
//#Modify package.json from "type": "commonjs" to "type": "module". # #enabling the native export and import syntax.
//#With this configuration, export works correctly, and I don't need to install #TypeScript separately in every project folder.
//#**Note: In TypeScript.json "types": [], With this TypeScript will not provide #autocomplete for Node.js global variables such as process.env or Buffer (Forces #explicit imports and improves performance).
//##################
//#Run typecheck command before execution
//npx tsc --noEmit
//##################
//////////////////////////////////////////////////////////////

// --- Task 1: Calculate the area of a rectangle ---
// Definition
let length :number = 4;
let width :number = 3;
let area :number = length * width;

// Verification
console.log(area);

// --- Task 2: Calculate Body Mass Index (BMI) ---
// Definition
let weight :number = 70;   // in kg
let height :number = 1.75; // in meters
let bmi :number = weight / (height * height);

// Verification
console.log(bmi);

// --- Task 3: Temperature Converter ---
// Definition
let celsius :number = 25;                        // ºC
let fahrenheit :number = (9 / 5) * celsius + 32; //Conversion to ºF

// Verification
console.log(celsius +'ºC is equal to '+ fahrenheit +'ºF');

// --- Task 4: Age Check with Boolean ---
// Definition
let age :number = 20;
let isAdult :boolean = age >= 18;

// Verification
console.log('Can he go to the party?'+ isAdult);

// --- Task 5: String Concatenation ---
// Definition
let firstName :string = "Hello";
let lastName :string = "World";
let fullName :string = firstName + " " + lastName;

// Verification
console.log(fullName);

// --- Task 6: Age Check with Strict Equality ---
// Definition 6.1 ("18" string vs 18 number)
//let userAgeString :any = "18"; ** Using any is not a good practice because it disables TypeScript's type checking.
let userAgeString :string = "18";
let targetAgeNumber :number = 18;
// Bypassing TS overlap check to demonstrate runtime behavior:
let isStrictAgeEqual :boolean = (userAgeString as unknown) === targetAgeNumber;    // false
let isStrictAgeNotEqual :boolean = (userAgeString as unknown) !== targetAgeNumber; // true

// Definition 6.2 (true boolean vs "true" string)
let isActiveBool :boolean = true;
//let isActiveStr :any = "true"; ** Using any is not a good practice because it disables TypeScript's type checking.
let isActiveStr :string = "true";
let isStrictActiveEqual :boolean = (isActiveBool as unknown) === isActiveStr; // false

// Definition 6.3 (Case sensitivity comparison)
let pass1 :string = "QA2026";
let pass2 :string = "QA2026";
let pass3 :string = "qa2026";
let isPassEqual :boolean = pass1 === pass2;     // true: identical content & type
let isPassCaseEqual :boolean = pass1 === pass3; // false: JS string comparison is case-sensitive

// Definition 6.4 (20 vs 20)
let price1 :number = 20;
let price2 :number = 20;
let isPriceEqual :boolean = price1 === price2;    // true: same value and type
let isPriceNotEqual :boolean = price1 !== price2; // false: === and !== always yield opposite boolean values

// Verification
console.log("6.1:", isStrictAgeEqual, isStrictAgeNotEqual);
console.log("6.2:", isStrictActiveEqual);
console.log("6.3:", isPassEqual, isPassCaseEqual);
console.log("6.4:", isPriceEqual, isPriceNotEqual);

// --- Task 7: Strict Equality with Different Types ---
// Definition
//let userInput :any = '18'; ** Using any is not a good practice because it disables TypeScript's type checking.
let userInput :string = '18';
let actualAge :number = 18;
let isEqualLoose :boolean = (userInput as unknown) == actualAge;   // true: == converts types before comparing ('18' -> 18)
let isEqualStrict :boolean = (userInput as unknown) === actualAge; // false: === checks value AND type (string vs number)

// Result
console.log("Loose (==):", isEqualLoose);
console.log("Strict (===):", isEqualStrict);

// --- Task 8: Type Conversion from String to Number ---
// Definition
let originalText :string = "42";
let convertedNumber :number = Number(originalText);

// Verification
console.log("Original String:", originalText);
console.log("Converted Number:", convertedNumber);

// --- Task 9: Runtime Type Conversion (Number to String) ---
// Definition
// Real conversion: String() creates a genuine string value ("100") in memory at runtime.
let originalNum9 :number = 100;
let convertedStr :string = String(originalNum9);

// Verification
console.log("Original Number:", originalNum9, typeof originalNum9);   // output: 100 "number"
console.log("Converted String:", convertedStr, typeof convertedStr); // output: "100" "string"

// --- Task 10: Type Assertion / Cast (Number to String) ---
// Definition
// Type assertion (cast): Tricks TypeScript compiler to treat it as string, but DOES NOT change the JS runtime value.
// In PL/SQL, it means a physical transformation. What use cases does this have?
let originalNum10 :number = 100;
let castedStr :string = originalNum10 as unknown as string;

// Verification
console.log("Original Number:", originalNum10, typeof originalNum10); // output: 100 "number"
console.log("Casted String:", castedStr, typeof castedStr);           // output: 100 "number" (still a number at runtime!)