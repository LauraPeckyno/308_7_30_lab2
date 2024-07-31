// Find the Largest Number
// Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.

function findLargest(a, b, c) {
    if (a > b && a > c) {  // test a to see if it is larger than b and c
        return a;  // if it's bigger, then it is the largest
    } else if (c > b && c > a) { // if a isn't largest, then test c to see if it's larger than a or b
        return c;  // if it's bigger then it's the largest
    } else {  // otherwise, it's the last option, b
        return b;
    };
};
console.log(findLargest(5, 10, 3)); // Output: 10
console.log(findLargest(8, 2, 6)); // Output: 8

// ---------------------------------------
// Reverse Words in a Sentence
// Description: Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words 
// in the sentence are reversed, but the words themselves aren't.

function reverseWords(sentence) {
    let indWords = sentence.split(' ');  // Split the sentence into word strings/arrays using the split function
    let swapWords = indWords.reverse();  // Reverse the word strings/arrays using the reverse function
    let backwardsSentence = swapWords.join(' ');  // Put them back together using a join. They need to be a string.
    return backwardsSentence;  //return the function to get a result
}
console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

/// Yay!  That finally worked!!!!!!

// ---------------------------------------
// Find the Longest Word in an Array
// Description: Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. 
// If there are multiple words with the same length, return the first one.

function findLongestWord(words) {
    // need to iterate through each word string and test the length then return the longest

    let longestWord = '';  // create a place to put the word string after the test
    for (let word of words) {  // for..of loop for the array (each word will be tested)  (I think we did something like this in class)
        if (word.length > longestWord.length) { /// iterating through the word strings to test the length
            longestWord = word;  ///and swapping out if it's longer each iteration
        }
    }
    return longestWord; // finally, returning the word with the largest length
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

// ---------------------------------------
// Count Occurrences of Words in a Sentence
// Description: Write a function countWords that takes a string sentence as an argument and returns an object where each key is a word in 
// the sentence and the corresponding value is the number of times that word appears in the sentence.

function countWords(sentence) {
    let numWords = {}; // created an empty object to collect the number of words, with the word being the key and the occurance count as the data
    let words = sentence.split(' '); // words will be the split up sentence. split the sentence up unto individual word strings using a space as the divider
    for (let word of words) {  // for..of loop to iterate through the array of words
        if (numWords[word]) {  // If the word is already a key in the object
          numWords[word]++; // add one to the total for the word
        } else {  // Otherwise, add the word as a key in the object with a count of 1 (first occurance)
          numWords[word] = 1;
        }
        // console.log(numWords);  //added this here to make sure I was counting all of the words. It checks out.
      }
      return numWords; // Return the word count and continue the iteration until you are out of words in words
}
console.log(countWords("hello world hello"));
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test"));
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }

// ok, I had a lot of help with this one. I did some research and they suggested a couple of different ways to do it. This made the most sense to me. 