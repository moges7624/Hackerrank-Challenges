function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(8);
    let currHour = s.substring(0, 2);
    let returnHour = "";

    if (amPm == "A") {
        if (currHour == "12") {
            returnHour = "00";
        } else returnHour = currHour;
    } else {
        if (currHour == "12") returnHour = currHour;
        else returnHour = parseInt(currHour, 10) + 12;
    }

    return returnHour + s.substring(2, 8);
}

console.log(timeConversion("12:00:20AM"));
console.log(timeConversion("12:00:20PM"));
