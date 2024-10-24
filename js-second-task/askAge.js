const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askAge() {
    rl.question('Set age between 18 - 22: ', (age) => {
        age = parseInt(age);
        if (age >= 18 && age <= 22) {
            console.log(`${age} : Old 😊`);
            rl.close();
        } else {
            console.log('Please enter an age between 18 - 22.');
            askAge();
        }
    });
}

askAge();