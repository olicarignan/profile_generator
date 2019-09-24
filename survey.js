const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`I also like ${answer2}!`);
    rl.question('What do you listen to while doing that?', (answer3) => {
      console.log(`${answer3} is my favourite band`);
      rl.question('Which meal is your favourite?', (answer4) => {
        console.log(`I also like ${answer4}`);
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          console.log(`${answer5} sounds delicious!`);
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            console.log(`${answer6} is a fun sport indeed`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`cool! you're all set, ${answer1}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});