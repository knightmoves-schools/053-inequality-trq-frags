function guessNumber(guess) {
    if (guess != 25) {
        return "not it";
    }
}

function strictGuessNumber(guess) {
    if (typeof guess === "number" && guess !== 25) {
        return "not it";
    }
}

module.exports = { guessNumber, strictGuessNumber };