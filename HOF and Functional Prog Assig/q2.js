// 2. Random Number Generator with Delay and Progress Indication: 

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number. 

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100);
// }
// function generateRandomNumberWithDelay(delayInSeconds) {
//     console.log(`Generating a random number after a delay of ${delayInSeconds} seconds...`);
//     let countdown = 10;
//     const countdownInterval = setInterval(() => {
//         console.log(`${countdown} seconds remaining...`);
//         countdown--;
//         if (countdown === 0) {
//             clearInterval(countdownInterval);
//             const randomNumber = generateRandomNumber();
//             console.log(`Random number generated: ${randomNumber}`);
//         }
//     }, 1000);
// }

// generateRandomNumberWithDelay(10);

function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  }
  
  function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generate a random number after a delay of ${delayInSeconds} seconds...`);
    let countdown = delayInSeconds;
    
    const countdownInterval = setInterval(() => {
      console.log(`${countdown} seconds remaining...`);
      countdown--;
  
      if (countdown === 0) {
        clearInterval(countdownInterval);
        const randomNumber = generateRandomNumber();
        console.log(`Random Number: ${randomNumber}`);
      }
    }, 1000);
  }
  
  generateRandomNumberWithDelay(10);
  