// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    } else {
        return value2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {

    if (wordsArray.length === 0) {
        return null
    }

    let longestWordFound = ''

    // for (let i = 0; i < wordsArray.length; i++) {

    //     const eachWord = wordsArray[i]

    //     if (eachWord.length > longestWordFound.length) {
    //         longestWordFound = eachWord
    //     }
    // }

    wordsArray.forEach((eachWord) => {

        if (eachWord.length > longestWordFound.length) {
            longestWordFound = eachWord
        }
    })

    return longestWordFound
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {

    let sum = 0

    // for (let i = 0; i < numbersArray.length; i++) {

    //     const eachNumber = numbersArray[i]

    //     sum += eachNumber
    // }


    numbersArray.forEach((eachNumber) => sum += eachNumber)

    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {

    if (numbersArray.length === 0) {
        return 0
    }

    const total = sumNumbers(numbersArray)

    const average = total / numbersArray.length

    return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {

    let exists = false

    // for (let i = 0; i < wordsArray.length; i++) {

    //     const eachWord = wordsArray[i]

    //     if (eachWord === wordToSearch) {
    //         exists = true
    //     }
    // }

    wordsArray.forEach((eachWord) => {
        if (eachWord === wordToSearch) {
            exists = true
        }
    })

    return exists
}






