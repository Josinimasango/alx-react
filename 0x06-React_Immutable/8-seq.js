const { Seq } = require('immutable');

function printBestStudents(grades) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const filtered = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName)
    }));

  console.log(filtered.toJS());
}

// Example usage
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  }
};

printBestStudents(grades);
