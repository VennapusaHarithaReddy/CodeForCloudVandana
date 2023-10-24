JAVASCRIPT
A.
function reverseWordsInSentence(sentence) {
       let words = sentence.split(' ');

      function reverseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    }

   
    let reversedWords = words.map(word => reverseWord(word));

    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 



const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = bubbleSortDescending(unsortedArray);
console.log("Sorted array in descending order:", sortedArray);

