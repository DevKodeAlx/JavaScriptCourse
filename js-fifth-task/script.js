
// Gets the current date and time

const now = new Date();

// Format the date as "Day, YYYY-MM-DD, Hour-Minute-Seconds"

const formattedDateTime = now.toLocaleDateString('en-SE', {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

// Display the formatted date and time

console.log("Date: " + formattedDateTime); 

