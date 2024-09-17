const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = '1245';

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line !== '');
    lines.shift();
    const students = lines.map((line) => line.split(','));

    let result = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    Object.keys(fields).forEach((field) => {
      result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    });
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database1');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(404).send('Cannot load the database2');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
