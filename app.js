// Find the Largest Number
// Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.

function findLargest(a, b, c) {
    // Your code here
    if (a >= b && a >= c) {
        return a;
    } else if (c >= b && c >= a) { 
        return c;
    } else { 
        return b
    };
};

console.log(findLargest(5, 10, 3)); // Output: 10
console.log(findLargest(8, 2, 6)); // Output: 8

// ---------------------------------------
// Reverse Words in a Sentence
// Description: Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words 
// in the sentence are reversed, but the words themselves aren't.

// Well shoot. I started off misunderstanding the task. I've reversed the entire sentence. I'll need to start over.  
//         function reverseWords(sentence) {
//         let backwords = ''; // create an empty string for your reversed letters
//         for (let i = sentence.length - 1; i >= 0; i--) { //check the sentence length and begin pulling each letter from it
//             backwords += sentence[i]; //dump the letters into an array
//         }
//         return backwords; /// execute the loop
//     };

function reverseWords(sentence) {
    let indWords = sentence.split(' ');
    let swapWords = indWords.reverse();
    let backwardsSentence = swapWords.join(' ');
    return backwardsSentence;
}
// Split the sentence into word arrays using the split function
// Reverse the word arrays using the reverse function
    // Put them back together using a join. They need to be a string.
console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

/// Yay!  That finally worked!!!!!!

// ---------------------------------------
// Find the Longest Word in an Array
// Description: Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. 
// If there are multiple words with the same length, return the first one.

function findLongestWord(words) {
    // Your code here
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

// ---------------------------------------
// Count Occurrences of Words in a Sentence
// Description: Write a function countWords that takes a string sentence as an argument and returns an object where each key is a word in 
// the sentence and the corresponding value is the number of times that word appears in the sentence.

function countWords(sentence) {
    // Your code here
}

console.log(countWords("hello world hello")); 
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test")); 
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }