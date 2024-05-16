function makeid(l) {
  // write your code here

// Define characters to choose from
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    let result = '';

// Loop to generate random string of length l
    for (let i = 0; i < l; i++) {
        // Randomly select a character from characters and append to result
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

// Return the generated random string
    return result;

	
	
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
