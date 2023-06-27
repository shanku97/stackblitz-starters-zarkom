// run `node index.js` in the terminal

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('amazon');
  } else if (i % 3 === 0) {
    console.log('google');
  } else if (i % 5 === 0) {
    console.log('facebook');
  } else {
    console.log(i);
  }
}



const students = [/* Array of student objects */];

students.sort((a, b) => {
  if (a.totalMarks !== b.totalMarks) {
    return b.totalMarks - a.totalMarks;
  } else if (a.biologyMarks !== b.biologyMarks) {
    return b.biologyMarks - a.biologyMarks; 
  } else {
    const dateA = new Date(a.dateOfBirth.split("-").reverse().join("-"));
    const dateB = new Date(b.dateOfBirth.split("-").reverse().join("-"));
    return dateA - dateB;
  }
});
