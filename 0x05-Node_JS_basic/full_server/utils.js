const fs = require('fs').promises;

async function readDatabase(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = data.split('\n')
    .map((row) => row.split(','))
    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    .map((row) => ({
      firstname: row[0],
      lastname: row[1],
      age: row[2],
      field: row[3],
    }));

  const csStudents = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstname);
  const sweStudents = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstname);

  return { csStudents, sweStudents };
}

export default readDatabase;
