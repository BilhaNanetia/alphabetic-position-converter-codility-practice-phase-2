function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //initialize an empty array to store the positions of letters
    const positions = [];

  //Iterate through each character in the input text after converting it to lowercase
    for (let char of text.toLowerCase()) {
        //Check if the current character is a letter by looking it up in the alphabet
      if (alphabet.includes(char)) {
        //Get the 1-based index of the current character in the alphabet
        const position = alphabet.indexOf(char) + 1; 
        //Push the position into the positions array
        positions.push(position);

      }

    }
  
     //Join the positions array into a string with spaces and return the result
    return positions.join(' ');

  }

  //Test cases

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
 // Output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


 console.log(alphabetPosition("Programming is fun!"));  //only consider letteres
 // Output: "16 18 15 7 18 1 13 13 9 14 7 9 19 6 21 14"

 console.log(alphabetPosition("56789"));
 // Output: ""     (empty string because there are no letters in the input)

 console.log(alphabetPosition("abcdefghijklmnopqrstuvwxyz"));
 // Output: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26"