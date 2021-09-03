function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    const quot = Math.floor(grades[i] / 5);
    const nxtMultiple = quot * 5 + 5;
    if (grades[i] >= 38)
      if (nxtMultiple - grades[i] < 3) grades[i] = nxtMultiple;
  }
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
// console.log(gradingStudents(67));
// console.log(gradingStudents(38));
// console.log(gradingStudents(33));
