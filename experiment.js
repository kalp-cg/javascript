function findLongestWords(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWords = [];

    // Find the length of the longest word(s)
    words.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWords = [word]; // Reset and add the new longest word
        } else if (word.length === maxLength) {
            longestWords.push(word); // Add the word if it matches the max length
        }
    });

    return longestWords;
}

// Test
console.log(findLongestWords("The quick brown fox jumpe over the lazy dog"));
