function processArray(numbers) {
    return Array.map(num => num % 2 ===
        0 ?num **2: num *3);
    
}
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
            
        }
        else {
            return str.toLowerCase();
        }
    });
}