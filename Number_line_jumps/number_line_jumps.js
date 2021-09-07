/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let sameLocationPoint = (x1 - x2) / (v2 - v1);

  if (Number.isInteger(sameLocationPoint) && sameLocationPoint > 0)
    return "YES";
  else return "NO";
}

console.log(kangaroo(2, 1, 1, 2));
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
