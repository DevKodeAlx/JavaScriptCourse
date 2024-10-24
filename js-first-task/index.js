let originalString = "asuntokionapajaa";
let searchString = "paja";
let newString = "";

if (originalString.includes(searchString)) {
    newString = searchString;
} else {
    newString = "String not found";
}

console.log("Origin string: " + originalString);
console.log("New string: " + newString);

let resultString = "";
for (let i = 2; i < originalString.length; i += 3) {
    let char = originalString[i];
    if (char === 'a') {
        char = '*';
    }
    resultString += char;
}

resultString = resultString.toUpperCase();

console.log("Every 3rd letter from " + originalString + " = " + resultString);
