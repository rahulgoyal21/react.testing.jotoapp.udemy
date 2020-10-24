/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret Word
 * @returns {number} - Number of letters matched between guessed word and
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const guessedLetterSet = new Set(guessedWord);
  const secretWordSet = new Set(secretWord);
  return [...secretWordSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
