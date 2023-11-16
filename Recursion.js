function isPalindrome(word) {
    if (word.length <= 1) {
      return true;
    } else {
      // Compare characters located at the ends of the word
      if (word[0] === word[word.length - 1]) {
        // If equality, test the rest of the word call function recursively
        return isPalindrome(word.slice(1, -1));
      } else {
        // If difference = not a palindrome
        return false;
      }
    }
  }
 const testWord ="radar";
 const result =  isPalindrome(testWord);

 console.log (Is "${testWord}" a palindrome? ${result});