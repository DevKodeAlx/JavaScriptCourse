// Arrays Task. 

//Task: A = Create an array

const animals = ["Dog", "Horse", "Cow"];
console.log("Array:", animals);
console.log("ArrayStr:", animals.join(", "));

// Task: B = Copy array and add new columns (Map)

const newAnimals = animals.map(animal => animal); // Create a copy.
newAnimals.push("Cat", "Sheep");
console.log("New array:", newAnimals);

// Task: C = Finds "Cow" from new array

const foundCow = newAnimals.includes("Cow");
console.log("Search reuslt:", foundCow ? "Cow, Founded" : "Cow, Not founded");

// Task: D = Test with words not found

const notFound = "Cows";
const foundNotFound = newAnimals.includes(notFound);
console.log("Search result:", foundNotFound ? notFound + ", Founded" : notFound + ", Not Founded");