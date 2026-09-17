// --- Task 1: Temperature Converter ---
export function convertToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32
}

// --- Task 2: Greeting Generator ---
export function greetUser(firstName: string, lastName: string): string {
    return `Hello, ${firstName} ${lastName}!`
}

// --- Task 3: Rectangle Area Calculator ---
export function calculateArea(width: number, height: number): number {
    return width * height
}

// Verification
console.log('Task 1 (25ºC to ºF):', convertToFahrenheit(25))
console.log('Task 2 (Greeting):', greetUser('Hola', 'Mundo'))
console.log('Task 3 (Area 4x3):', calculateArea(4, 3))