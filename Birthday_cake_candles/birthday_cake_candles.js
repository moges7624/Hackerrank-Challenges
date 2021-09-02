function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    let max_count = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i];
            max_count = 0;
        };

        if (max == candles[i]) max_count++;
    }
    return max_count;
}

console.log(birthdayCakeCandles([3,2,1,3]));