const fs = require('fs');

const countStudents = async (path) => {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // split using newline
  const students = data.split('\n')
    // turn a row into an array by splitting by ,
    .map((row) => row.split(','))
    // skip first row
    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    // coverting all into objects
    .map((row) => ({
      firstName: row[0],
      lastName: row[1],
      age: row[2],
      field: row[3].replace('\r', ''),
    }));
  //  a code that generates CS students
  const CS = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  // generating SWE students
  const SWE = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  // print len convert to string
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  return { students, CS, SWE };
};

module.exports = countStudents;
