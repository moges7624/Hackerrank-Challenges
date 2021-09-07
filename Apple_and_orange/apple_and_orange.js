/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleInRange = 0;
  let orangeInRange = 0;
  
  for (let i = 0; i < apples.length; i++) {
    apples[i] = apples[i] + a;
    if (apples[i] >= s && apples[i] <= t) appleInRange++;
  }

  for (let i = 0; i < oranges.length; i++) {
    oranges[i] = oranges[i] + b;
    if (oranges[i] <= t && oranges[i] >= s) orangeInRange++;
  }

  console.log(appleInRange);
  console.log(orangeInRange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
