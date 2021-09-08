/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let highestScore = scores[0];
    let highestScoreBreak = 0;
    let lowestScore = scores[0];
    let lowestScoreBreak = 0;

    for (let i  = 0; i < scores.length; i++) {
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestScoreBreak++;
        };
        if (scores[i] < lowestScore) {
            lowestScore = scores[i];
            lowestScoreBreak++;
        }
    }

    return [highestScoreBreak, lowestScoreBreak];

}

console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42]));